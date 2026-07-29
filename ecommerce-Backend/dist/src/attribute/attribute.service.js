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
    async create(body) {
        if (!body.name || !body.slug || !body.type) {
            throw new common_1.BadRequestException('Name, slug, and type are required');
        }
        const exists = await this.prisma.attribute.findFirst({
            where: {
                OR: [{ name: body.name }, { slug: body.slug }]
            }
        });
        if (exists) {
            throw new common_1.ConflictException('Attribute with this name or slug already exists');
        }
        const valuesData = body.values && Array.isArray(body.values) ? body.values.map((v) => ({
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
    async findAll(query) {
        const page = parseInt(query.page || '1');
        const limit = parseInt(query.limit || '10');
        const skip = (page - 1) * limit;
        const where = {};
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
    async findOne(id) {
        const attribute = await this.prisma.attribute.findUnique({
            where: { id },
            include: { values: true }
        });
        if (!attribute)
            throw new common_1.NotFoundException('Attribute not found');
        return { data: attribute };
    }
    async update(id, body) {
        const attribute = await this.prisma.attribute.findUnique({ where: { id } });
        if (!attribute)
            throw new common_1.NotFoundException('Attribute not found');
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
            if (exists)
                throw new common_1.ConflictException('Another attribute with this name or slug already exists');
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
    async remove(id) {
        const usedValue = await this.prisma.attributeValue.findFirst({
            where: {
                attributeId: id,
                variants: { some: {} }
            }
        });
        if (usedValue) {
            throw new common_1.ConflictException('Cannot delete attribute: One or more of its values are used by product variants');
        }
        await this.prisma.attribute.delete({ where: { id } });
        return { data: { success: true } };
    }
    async addValue(attributeId, body) {
        const attribute = await this.prisma.attribute.findUnique({ where: { id: attributeId } });
        if (!attribute)
            throw new common_1.NotFoundException('Attribute not found');
        if (!body.value || !body.slug)
            throw new common_1.BadRequestException('Value and slug are required');
        const exists = await this.prisma.attributeValue.findUnique({
            where: { attributeId_slug: { attributeId, slug: body.slug } }
        });
        if (exists)
            throw new common_1.ConflictException(`Value slug '${body.slug}' already exists in this attribute`);
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
    async updateValue(valueId, body) {
        const valueRec = await this.prisma.attributeValue.findUnique({ where: { id: valueId } });
        if (!valueRec)
            throw new common_1.NotFoundException('Attribute value not found');
        if (body.slug && body.slug !== valueRec.slug) {
            const exists = await this.prisma.attributeValue.findUnique({
                where: { attributeId_slug: { attributeId: valueRec.attributeId, slug: body.slug } }
            });
            if (exists)
                throw new common_1.ConflictException(`Value slug '${body.slug}' already exists in this attribute`);
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
    async removeValue(valueId) {
        const valueRec = await this.prisma.attributeValue.findUnique({
            where: { id: valueId },
            include: { _count: { select: { variants: true } } }
        });
        if (!valueRec)
            throw new common_1.NotFoundException('Attribute value not found');
        if (valueRec._count.variants > 0) {
            throw new common_1.ConflictException('Cannot delete value: It is currently used by active product variants');
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