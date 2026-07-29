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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BrandService = class BrandService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(body) {
        if (!body.name || !body.slug) {
            throw new common_1.BadRequestException('Name and slug are required');
        }
        const exists = await this.prisma.brand.findFirst({
            where: {
                OR: [{ name: body.name }, { slug: body.slug }]
            }
        });
        if (exists) {
            throw new common_1.ConflictException('Brand with this name or slug already exists');
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
    async findOne(id) {
        const brand = await this.prisma.brand.findUnique({ where: { id } });
        if (!brand)
            throw new common_1.NotFoundException('Brand not found');
        return { data: brand };
    }
    async update(id, body) {
        const brand = await this.prisma.brand.findUnique({ where: { id } });
        if (!brand)
            throw new common_1.NotFoundException('Brand not found');
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
            if (exists)
                throw new common_1.ConflictException('Another brand with this name or slug already exists');
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
    async remove(id) {
        await this.prisma.brand.delete({ where: { id } });
        return { data: { success: true } };
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BrandService);
//# sourceMappingURL=brand.service.js.map