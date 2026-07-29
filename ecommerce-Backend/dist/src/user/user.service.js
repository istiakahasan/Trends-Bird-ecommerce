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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(body) {
        if (!body.roleId)
            throw new common_1.BadRequestException('Role is required');
        if (!body.email || !body.password)
            throw new common_1.BadRequestException('Email and password required');
        const exists = await this.prisma.user.findUnique({ where: { email: body.email } });
        if (exists)
            throw new common_1.ConflictException('Email already in use');
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
    async findAll(query) {
        const page = parseInt(query.page || '1');
        const limit = parseInt(query.limit || '10');
        const skip = (page - 1) * limit;
        const where = {};
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
    async findOne(id) {
        const user = await this.prisma.user.findUnique({ where: { id }, include: { role: true } });
        return { data: user };
    }
    async update(id, currentUserId, body) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user)
            throw new common_1.BadRequestException('User not found');
        if (id === currentUserId && body.roleId !== undefined && body.roleId !== user.roleId) {
            throw new common_1.ForbiddenException('You cannot change your own role');
        }
        if (body.email && body.email !== user.email) {
            const exists = await this.prisma.user.findUnique({ where: { email: body.email } });
            if (exists)
                throw new common_1.ConflictException('Email already in use');
        }
        const data = { ...body };
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
    async remove(id) {
        await this.prisma.user.delete({ where: { id } });
        return { data: { success: true } };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map