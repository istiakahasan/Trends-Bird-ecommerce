import { Injectable, BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AttributeService {
  constructor(private prisma: PrismaService) {}

  async create(body: any) {
    if (!body.name || !body.slug || !body.type) {
      throw new BadRequestException('Name, slug, and type are required');
    }

    const exists = await this.prisma.attribute.findFirst({
      where: {
        OR: [{ name: body.name }, { slug: body.slug }]
      }
    });

    if (exists) {
      throw new ConflictException('Attribute with this name or slug already exists');
    }

    const valuesData = body.values && Array.isArray(body.values) ? body.values.map((v: any) => ({
      value: v.value,
      slug: v.slug,
      reference: v.reference
    })) : [];

    const attribute = await this.prisma.attribute.create({
      data: {
        name: body.name,
        slug: body.slug,
        type: body.type,
        values: {
          create: valuesData
        }
      },
      include: { values: true }
    });

    return { data: attribute };
  }

  async findAll(query: { search?: string; type?: string; page?: string; limit?: string }) {
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
    if (query.type) {
      where.type = query.type;
    }

    const [attributes, total] = await Promise.all([
      this.prisma.attribute.findMany({
        where,
        include: { values: true },
        skip,
        take: limit,
        orderBy: { id: 'desc' }
      }),
      this.prisma.attribute.count({ where })
    ]);

    return {
      data: attributes,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  async findOne(id: number) {
    const attribute = await this.prisma.attribute.findUnique({ 
      where: { id },
      include: { values: true } 
    });
    if (!attribute) throw new NotFoundException('Attribute not found');
    return { data: attribute };
  }

  async update(id: number, body: any) {
    const attribute = await this.prisma.attribute.findUnique({ where: { id } });
    if (!attribute) throw new NotFoundException('Attribute not found');

    if (body.name || body.slug) {
      const exists = await this.prisma.attribute.findFirst({
        where: {
          id: { not: id },
          OR: [
            ...(body.name ? [{ name: body.name }] : []),
            ...(body.slug ? [{ slug: body.slug }] : []),
          ]
        }
      });
      if (exists) throw new ConflictException('Another attribute with this name or slug already exists');
    }
    
    const updated = await this.prisma.attribute.update({
      where: { id },
      data: {
        name: body.name,
        slug: body.slug,
        type: body.type
      },
      include: { values: true }
    });

    return { data: updated };
  }

  async remove(id: number) {
    const usedValue = await this.prisma.attributeValue.findFirst({
      where: {
        attributeId: id,
        variants: { some: {} }
      }
    });

    if (usedValue) {
      throw new ConflictException('Cannot delete attribute: One or more of its values are used by product variants');
    }

    await this.prisma.attribute.delete({ where: { id } });
    return { data: { success: true } };
  }

  // Value Management
  async addValue(attributeId: number, body: any) {
    const attribute = await this.prisma.attribute.findUnique({ where: { id: attributeId } });
    if (!attribute) throw new NotFoundException('Attribute not found');
    if (!body.value || !body.slug) throw new BadRequestException('Value and slug are required');

    const exists = await this.prisma.attributeValue.findUnique({
      where: { attributeId_slug: { attributeId, slug: body.slug } }
    });

    if (exists) throw new ConflictException(`Value slug '${body.slug}' already exists in this attribute`);

    const newValue = await this.prisma.attributeValue.create({
      data: {
        attributeId,
        value: body.value,
        slug: body.slug,
        reference: body.reference
      }
    });

    return { data: newValue };
  }

  async updateValue(valueId: number, body: any) {
    const valueRec = await this.prisma.attributeValue.findUnique({ where: { id: valueId } });
    if (!valueRec) throw new NotFoundException('Attribute value not found');

    if (body.slug && body.slug !== valueRec.slug) {
      const exists = await this.prisma.attributeValue.findUnique({
        where: { attributeId_slug: { attributeId: valueRec.attributeId, slug: body.slug } }
      });
      if (exists) throw new ConflictException(`Value slug '${body.slug}' already exists in this attribute`);
    }

    const updated = await this.prisma.attributeValue.update({
      where: { id: valueId },
      data: {
        value: body.value,
        slug: body.slug,
        reference: body.reference
      }
    });

    return { data: updated };
  }

  async removeValue(valueId: number) {
    const valueRec = await this.prisma.attributeValue.findUnique({ 
      where: { id: valueId },
      include: { _count: { select: { variants: true } } }
    });
    
    if (!valueRec) throw new NotFoundException('Attribute value not found');

    if (valueRec._count.variants > 0) {
      throw new ConflictException('Cannot delete value: It is currently used by active product variants');
    }

    await this.prisma.attributeValue.delete({ where: { id: valueId } });
    return { data: { success: true } };
  }
}
