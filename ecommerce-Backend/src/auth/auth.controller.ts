import { Controller, Post, Body, Get, Req, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../common/decorators/public.decorator';
import { PrismaService } from '../prisma/prisma.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService
  ) {}

  @Public()
  @Post('login')
  async login(@Body() body: any) {
    return this.authService.login(body);
  }

  @Public()
  @Post('refresh')
  async refresh(@Body() body: any) {
    return this.authService.refresh(body);
  }

  @Post('logout')
  async logout(@Req() req: any) {
    return this.authService.logout(req.user.userId);
  }

  @Get('me')
  async getMe(@Req() req: any) {
    // Re-verify the user in DB to get the latest active status and permissions
    const user = await this.prisma.user.findUnique({
      where: { id: req.user.userId },
      include: {
        role: {
          include: { permissions: true }
        }
      }
    });

    if (!user || !user.active) {
      throw new UnauthorizedException('User is inactive or deleted');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role?.name || null,
      permissions: user.role?.permissions.map(p => p.name) || [],
    };

    return {
      data: payload
    };
  }
}

