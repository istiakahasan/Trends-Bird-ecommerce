"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AttributeService = class AttributeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const existing = await this.prisma.attribute.findFirst({
            where: { OR: [{ name: dto.name }, { slug: dto.slug }] },
        });
        if (existing) {
            throw new common_1.ConflictException('An attribute with this name or slug already exists');
        }
        if (dto.values && dto.values.length > 0) {
            const slugs = dto.values.map((v) => v.slug);
            const labels = dto.values.map((v) => v.value.toLowerCase());
            const dupSlug = slugs.find((s, i) => slugs.indexOf(s) !== i);
            if (dupSlug) {
                throw new common_1.BadRequestException(`Duplicate slug "${dupSlug}" in the values list`);
            }
            const dupLabel = labels.find((l, i) => labels.indexOf(l) !== i);
            if (dupLabel) {
                throw new common_1.BadRequestException(`Duplicate value label "${dupLabel}" in the values list`);
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
    async findAll(query) {
        const page = Math.max(1, parseInt(query.page || '1'));
        const limit = Math.min(100, Math.max(1, parseInt(query.limit || '10')));
        const skip = (page - 1) * limit;
        const where = {};
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
    async findOne(id) {
        const attribute = await this.prisma.attribute.findUnique({
            where: { id },
            include: { values: { orderBy: { id: 'asc' } } },
        });
        if (!attribute)
            throw new common_1.NotFoundException('Attribute not found');
        return { data: attribute };
    }
    async update(id, dto) {
        const attribute = await this.prisma.attribute.findUnique({ where: { id } });
        if (!attribute)
            throw new common_1.NotFoundException('Attribute not found');
        if (dto.name !== undefined || dto.slug !== undefined) {
            const conditions = [];
            if (dto.name !== undefined)
                conditions.push({ name: dto.name });
            if (dto.slug !== undefined)
                conditions.push({ slug: dto.slug });
            const conflict = await this.prisma.attribute.findFirst({
                where: { id: { not: id }, OR: conditions },
            });
            if (conflict) {
                throw new common_1.ConflictException('Another attribute with this name or slug already exists');
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
    async remove(id) {
        const attribute = await this.prisma.attribute.findUnique({ where: { id } });
        if (!attribute)
            throw new common_1.NotFoundException('Attribute not found');
        const usedValue = await this.prisma.attributeValue.findFirst({
            where: { attributeId: id, variants: { some: {} } },
        });
        if (usedValue) {
            throw new common_1.ConflictException('Cannot delete attribute: one or more of its values are used by product variants');
        }
        await this.prisma.attribute.delete({ where: { id } });
        return { data: { success: true } };
    }
    async findValue(valueId) {
        const val = await this.prisma.attributeValue.findUnique({
            where: { id: valueId },
            include: { attribute: true },
        });
        if (!val)
            throw new common_1.NotFoundException('Attribute value not found');
        return { data: val };
    }
    async addValue(attributeId, dto) {
        const attribute = await this.prisma.attribute.findUnique({ where: { id: attributeId } });
        if (!attribute)
            throw new common_1.NotFoundException('Attribute not found');
        const slugConflict = await this.prisma.attributeValue.findUnique({
            where: { attributeId_slug: { attributeId, slug: dto.slug } },
        });
        if (slugConflict) {
            throw new common_1.ConflictException(`Slug "${dto.slug}" already exists in this attribute`);
        }
        const labelConflict = await this.prisma.attributeValue.findFirst({
            where: {
                attributeId,
                value: { equals: dto.value, mode: 'insensitive' },
            },
        });
        if (labelConflict) {
            throw new common_1.ConflictException(`Value "${dto.value}" already exists in this attribute`);
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
    async updateValue(valueId, dto) {
        const valueRec = await this.prisma.attributeValue.findUnique({ where: { id: valueId } });
        if (!valueRec)
            throw new common_1.NotFoundException('Attribute value not found');
        const { attributeId } = valueRec;
        if (dto.slug !== undefined && dto.slug !== valueRec.slug) {
            const slugConflict = await this.prisma.attributeValue.findUnique({
                where: { attributeId_slug: { attributeId, slug: dto.slug } },
            });
            if (slugConflict) {
                throw new common_1.ConflictException(`Slug "${dto.slug}" already exists in this attribute`);
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
                throw new common_1.ConflictException(`Value "${dto.value}" already exists in this attribute`);
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
    async removeValue(valueId) {
        const valueRec = await this.prisma.attributeValue.findUnique({
            where: { id: valueId },
            include: { _count: { select: { variants: true } } },
        });
        if (!valueRec)
            throw new common_1.NotFoundException('Attribute value not found');
        if (valueRec._count.variants > 0) {
            throw new common_1.ConflictException('Cannot delete value: it is currently used by active product variants');
        }
        await this.prisma.attributeValue.delete({ where: { id: valueId } });
        return { data: { success: true } };
    }
};
exports.AttributeService = AttributeService;
exports.AttributeService = AttributeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AttributeService);
//# sourceMappingURL=attribute.service.js.map