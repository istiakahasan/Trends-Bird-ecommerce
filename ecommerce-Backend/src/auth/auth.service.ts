import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async login(body: any) {
    const { email, password } = body;
    const user = await this.prisma.user.findUnique({ 
      where: { email },
      include: {
        role: {
          include: { permissions: true }
        }
      }
    });

   if (!user) {
  throw new UnauthorizedException('User not found');
}

if (!user.active) {
  throw new UnauthorizedException('User inactive');
}

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Wrong password');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role?.name || null,
      permissions: user.role?.permissions.map(p => p.name) || [],
    };
    
    // Issue short-lived access token and long-lived refresh token
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign({ sub: user.id }, { expiresIn: '7d' });
    
    // Hash refresh token for secure DB storage
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    
    await this.prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: hashedRefreshToken }
    });

    return {
      data: {
        accessToken,
        refreshToken,
      }
    };
  }

  async refresh(body: any) {
    const { refreshToken } = body;
    if (!refreshToken) throw new UnauthorizedException('No refresh token provided');
    
    try {
      // Verify signature and expiration
      const decoded = this.jwtService.verify(refreshToken);
      const userId = decoded.sub;
      
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: {
          role: {
            include: { permissions: true }
          }
        }
      });
      
      if (!user || !user.active || !user.refreshToken) {
        throw new UnauthorizedException('Invalid credentials');
      }
      
      // Verify against hashed token in database
      const isMatch = await bcrypt.compare(refreshToken, user.refreshToken);
      if (!isMatch) {
        throw new UnauthorizedException('Invalid credentials');
      }
      
      const payload = {
        sub: user.id,
        email: user.email,
        role: user.role?.name || null,
        permissions: user.role?.permissions.map(p => p.name) || [],
      };
      
      // Rotate both tokens
      const newAccessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
      const newRefreshToken = this.jwtService.sign({ sub: user.id }, { expiresIn: '7d' });
      
      const hashedNewRefreshToken = await bcrypt.hash(newRefreshToken, 10);
      
      await this.prisma.user.update({
        where: { id: user.id },
        data: { refreshToken: hashedNewRefreshToken }
      });
      
      return {
        data: {
          accessToken: newAccessToken,
          refreshToken: newRefreshToken
        }
      };
      
    } catch (e) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async logout(userId: number) {
    // Revoke token server-side
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null }
    });
    return { data: { success: true } };
  }
}
