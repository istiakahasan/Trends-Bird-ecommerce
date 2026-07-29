import { Injectable, BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BrandService {
  constructor(private prisma: PrismaService) {}

  async create(body: any) {
    if (!body.name || !body.slug) {
      throw new BadRequestException('Name and slug are required');
    }

    const exists = await this.prisma.brand.findFirst({
      where: {
        OR: [{ name: body.name }, { slug: body.slug }]
      }
    });

    if (exists) {
      throw new ConflictException('Brand with this name or slug already exists');
    }

    const brand = await this.prisma.brand.create({
      data: {
        name: body.name,
        slug: body.slug,
        logo: body.logo,
        description: body.description,
        status: body.status || 'active',
      }
    });

    return { data: brand };
  }

  async findAll(query: { search?: string; status?: string; page?: string; limit?: string }) {
    const page = parseInt(query.page || '1');
    const limit = parseInt(query.limit || '10');
    const skip = (page - 1) * limit;

    const where: any = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { slug: { contains: query.search, mode: 'insensitive' } }
      ];
    }
    if (query.status) {
      where.status = query.status;
    }

    const [brands, total] = await Promise.all([
      this.prisma.brand.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: 'desc' }
      }),
      this.prisma.brand.count({ where })
    ]);

    return {
      data: brands,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  async findOne(id: number) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    if (!brand) throw new NotFoundException('Brand not found');
    return { data: brand };
  }

  async update(id: number, body: any) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    if (!brand) throw new NotFoundException('Brand not found');

    if (body.name || body.slug) {
      const exists = await this.prisma.brand.findFirst({
        where: {
          id: { not: id },
          OR: [
            ...(body.name ? [{ name: body.name }] : []),
            ...(body.slug ? [{ slug: body.slug }] : []),
          ]
        }
      });
      if (exists) throw new ConflictException('Another brand with this name or slug already exists');
    }

    const updated = await this.prisma.brand.update({
      where: { id },
      data: {
        name: body.name,
        slug: body.slug,
        logo: body.logo,
        description: body.description,
        status: body.status,
      }
    });

    return { data: updated };
  }

  async remove(id: number) {
    // Note: Due to foreign keys, if products are tied to this brand, Prisma will error unless
    // cascade deletes are configured or the relations are cleared first.
    // Spec doesn't mandate cascade for brands, so standard delete applies.
    await this.prisma.brand.delete({ where: { id } });
    return { data: { success: true } };
  }
}
