import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from './dto/update-attribute-value.dto';

@Injectable()
export class AttributeService {
  constructor(private prisma: PrismaService) {}


  async create(dto: CreateAttributeDto) {
    const existing = await this.prisma.attribute.findFirst({
      where: { OR: [{ name: dto.name }, { slug: dto.slug }] },
    });
    if (existing) {
      throw new ConflictException('An attribute with this name or slug already exists');
    }

    if (dto.values && dto.values.length > 0) {
      const slugs = dto.values.map((v) => v.slug);
      const labels = dto.values.map((v) => v.value.toLowerCase());

      const dupSlug = slugs.find((s, i) => slugs.indexOf(s) !== i);
      if (dupSlug) {
        throw new BadRequestException(`Duplicate slug "${dupSlug}" in the values list`);
      }
      const dupLabel = labels.find((l, i) => labels.indexOf(l) !== i);
      if (dupLabel) {
        throw new BadRequestException(`Duplicate value label "${dupLabel}" in the values list`);
      }
    }

    const attribute = await this.prisma.attribute.create({
      data: {
        name: dto.name,
        slug: dto.slug,
        type: dto.type,
        values: dto.values
          ? {
              create: dto.values.map((v) => ({
                value: v.value,
                slug: v.slug,
                reference: v.reference,
              })),
            }
          : undefined,
      },
      include: { values: true },
    });

    return { data: attribute };
  }

  async findAll(query: {
    search?: string;
    type?: string;
    page?: string;
    limit?: string;
  }) {
    const page = Math.max(1, parseInt(query.page || '1'));
    const limit = Math.min(100, Math.max(1, parseInt(query.limit || '10')));
    const skip = (page - 1) * limit;

    const where: any = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { slug: { contains: query.search, mode: 'insensitive' } },
      ];
    }
    if (query.type) {
      where.type = query.type;
    }

    const [attributes, total] = await Promise.all([
      this.prisma.attribute.findMany({
        where,
        include: { values: { orderBy: { id: 'asc' } } },
        skip,
        take: limit,
        orderBy: { id: 'desc' },
      }),
      this.prisma.attribute.count({ where }),
    ]);

    return {
      data: attributes,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: number) {
    const attribute = await this.prisma.attribute.findUnique({
      where: { id },
      include: { values: { orderBy: { id: 'asc' } } },
    });
    if (!attribute) throw new NotFoundException('Attribute not found');
    return { data: attribute };
  }

  async update(id: number, dto: UpdateAttributeDto) {
    const attribute = await this.prisma.attribute.findUnique({ where: { id } });
    if (!attribute) throw new NotFoundException('Attribute not found');

    if (dto.name !== undefined || dto.slug !== undefined) {
      const conditions: any[] = [];
      if (dto.name !== undefined) conditions.push({ name: dto.name });
      if (dto.slug !== undefined) conditions.push({ slug: dto.slug });

      const conflict = await this.prisma.attribute.findFirst({
        where: { id: { not: id }, OR: conditions },
      });
      if (conflict) {
        throw new ConflictException('Another attribute with this name or slug already exists');
      }
    }

    const updated = await this.prisma.attribute.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.slug !== undefined && { slug: dto.slug }),
        ...(dto.type !== undefined && { type: dto.type }),
      },
      include: { values: { orderBy: { id: 'asc' } } },
    });

    return { data: updated };
  }

  async remove(id: number) {
    const attribute = await this.prisma.attribute.findUnique({ where: { id } });
    if (!attribute) throw new NotFoundException('Attribute not found');

    const usedValue = await this.prisma.attributeValue.findFirst({
      where: { attributeId: id, variants: { some: {} } },
    });
    if (usedValue) {
      throw new ConflictException(
        'Cannot delete attribute: one or more of its values are used by product variants',
      );
    }

    await this.prisma.attribute.delete({ where: { id } });
    return { data: { success: true } };
  }

  async findValue(valueId: number) {
    const val = await this.prisma.attributeValue.findUnique({
      where: { id: valueId },
      include: { attribute: true },
    });
    if (!val) throw new NotFoundException('Attribute value not found');
    return { data: val };
  }

  async addValue(attributeId: number, dto: CreateAttributeValueDto) {
    const attribute = await this.prisma.attribute.findUnique({ where: { id: attributeId } });
    if (!attribute) throw new NotFoundException('Attribute not found');

    const slugConflict = await this.prisma.attributeValue.findUnique({
      where: { attributeId_slug: { attributeId, slug: dto.slug } },
    });
    if (slugConflict) {
      throw new ConflictException(`Slug "${dto.slug}" already exists in this attribute`);
    }

    const labelConflict = await this.prisma.attributeValue.findFirst({
      where: {
        attributeId,
        value: { equals: dto.value, mode: 'insensitive' },
      },
    });
    if (labelConflict) {
      throw new ConflictException(`Value "${dto.value}" already exists in this attribute`);
    }

    const newValue = await this.prisma.attributeValue.create({
      data: {
        attributeId,
        value: dto.value,
        slug: dto.slug,
        reference: dto.reference,
      },
    });

    return { data: newValue };
  }

  async updateValue(valueId: number, dto: UpdateAttributeValueDto) {
    const valueRec = await this.prisma.attributeValue.findUnique({ where: { id: valueId } });
    if (!valueRec) throw new NotFoundException('Attribute value not found');

    const { attributeId } = valueRec;

    if (dto.slug !== undefined && dto.slug !== valueRec.slug) {
      const slugConflict = await this.prisma.attributeValue.findUnique({
        where: { attributeId_slug: { attributeId, slug: dto.slug } },
      });
      if (slugConflict) {
        throw new ConflictException(`Slug "${dto.slug}" already exists in this attribute`);
      }
    }

    if (dto.value !== undefined && dto.value.toLowerCase() !== valueRec.value.toLowerCase()) {
      const labelConflict = await this.prisma.attributeValue.findFirst({
        where: {
          attributeId,
          id: { not: valueId },
          value: { equals: dto.value, mode: 'insensitive' },
        },
      });
      if (labelConflict) {
        throw new ConflictException(`Value "${dto.value}" already exists in this attribute`);
      }
    }

    const updated = await this.prisma.attributeValue.update({
      where: { id: valueId },
      data: {
        ...(dto.value !== undefined && { value: dto.value }),
        ...(dto.slug !== undefined && { slug: dto.slug }),
        ...(dto.reference !== undefined && { reference: dto.reference }),
      },
    });

    return { data: updated };
  }

  async removeValue(valueId: number) {
    const valueRec = await this.prisma.attributeValue.findUnique({
      where: { id: valueId },
      include: { _count: { select: { variants: true } } },
    });
    if (!valueRec) throw new NotFoundException('Attribute value not found');

    if (valueRec._count.variants > 0) {
      throw new ConflictException(
        'Cannot delete value: it is currently used by active product variants',
      );
    }

    await this.prisma.attributeValue.delete({ where: { id: valueId } });
    return { data: { success: true } };
  }
}
