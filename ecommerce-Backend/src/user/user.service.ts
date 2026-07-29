import { Injectable, BadRequestException, ConflictException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(body: any) {
    if (!body.roleId) throw new BadRequestException('Role is required');
    if (!body.email || !body.password) throw new BadRequestException('Email and password required');

    const exists = await this.prisma.user.findUnique({ where: { email: body.email } });
    if (exists) throw new ConflictException('Email already in use');

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        name: body.name,
        phone: body.phone,
        gender: body.gender,
        avatar: body.avatar,
        active: body.active !== undefined ? body.active : true,
        roleId: body.roleId
      },
      include: { role: true }
    });

    return { data: user };
  }

  async findAll(query: { search?: string; roleId?: string; active?: string; page?: string; limit?: string }) {
    const page = parseInt(query.page || '1');
    const limit = parseInt(query.limit || '10');
    const skip = (page - 1) * limit;

    const where: any = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { email: { contains: query.search, mode: 'insensitive' } }
      ];
    }
    if (query.roleId) {
      where.roleId = parseInt(query.roleId);
    }
    if (query.active !== undefined) {
      where.active = query.active === 'true';
    }

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        include: { role: true },
        skip,
        take: limit,
        orderBy: { id: 'desc' }
      }),
      this.prisma.user.count({ where })
    ]);

    return {
      data: users,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id }, include: { role: true } });
    return { data: user };
  }

  async update(id: number, currentUserId: number, body: any) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new BadRequestException('User not found');

    if (id === currentUserId && body.roleId !== undefined && body.roleId !== user.roleId) {
      throw new ForbiddenException('You cannot change your own role');
    }

    if (body.email && body.email !== user.email) {
      const exists = await this.prisma.user.findUnique({ where: { email: body.email } });
      if (exists) throw new ConflictException('Email already in use');
    }

    const data: any = { ...body };
    if (body.password) {
      data.password = await bcrypt.hash(body.password, 10);
    }

    const updated = await this.prisma.user.update({
      where: { id },
      data,
      include: { role: true }
    });

    return { data: updated };
  }

  async remove(id: number) {
    await this.prisma.user.delete({ where: { id } });
    return { data: { success: true } };
  }
}
