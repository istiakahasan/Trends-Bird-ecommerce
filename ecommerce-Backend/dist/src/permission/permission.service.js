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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PermissionService = class PermissionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    normalizeName(name) {
        return name.toLowerCase().replace(/\s+/g, '');
    }
    async createGroup(body) {
        if (!body.name || !body.actions || body.actions.length === 0) {
            throw new common_1.BadRequestException('Group name and at least one action are required.');
        }
        const groupName = this.normalizeName(body.name);
        const existingGroup = await this.prisma.permissionGroup.findUnique({
            where: { name: groupName }
        });
        if (existingGroup) {
            throw new common_1.ConflictException(`Group '${groupName}' already exists`);
        }
        const permissionNames = body.actions.map(a => `${groupName}:${this.normalizeName(a)}`);
        const existingPerms = await this.prisma.permission.findMany({
            where: { name: { in: permissionNames } }
        });
        if (existingPerms.length > 0) {
            throw new common_1.ConflictException(`Some permissions already exist: ${existingPerms.map(p => p.name).join(', ')}`);
        }
        const newGroup = await this.prisma.permissionGroup.create({
            data: {
                name: groupName,
                description: body.description,
                permissions: {
                    create: body.actions.map(action => ({
                        name: `${groupName}:${this.normalizeName(action)}`,
                        description: `Allows ${this.normalizeName(action)} on ${groupName}`
                    }))
                }
            },
            include: { permissions: true }
        });
        return { data: newGroup };
    }
    async getGroups(query) {
        const page = parseInt(query.page || '1');
        const limit = parseInt(query.limit || '10');
        const skip = (page - 1) * limit;
        const whereClause = {};
        if (query.search) {
            whereClause.name = { contains: query.search, mode: 'insensitive' };
        }
        const [groups, total] = await Promise.all([
            this.prisma.permissionGroup.findMany({
                where: whereClause,
                include: { permissions: true },
                skip,
                take: limit,
                orderBy: { id: 'asc' }
            }),
            this.prisma.permissionGroup.count({ where: whereClause })
        ]);
        return {
            data: groups,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        };
    }
    async updateGroup(id, body) {
        const group = await this.prisma.permissionGroup.findUnique({ where: { id }, include: { permissions: true } });
        if (!group)
            throw new common_1.BadRequestException('Group not found');
        if (body.actionsToAdd && body.actionsToAdd.length > 0) {
            const permsToCreate = body.actionsToAdd.map(action => {
                const actionName = this.normalizeName(action);
                return {
                    name: `${group.name}:${actionName}`,
                    description: `Allows ${actionName} on ${group.name}`
                };
            });
            const existingNames = group.permissions.map(p => p.name);
            const newPerms = permsToCreate.filter(p => !existingNames.includes(p.name));
            if (newPerms.length > 0) {
                await this.prisma.permissionGroup.update({
                    where: { id },
                    data: {
                        permissions: {
                            create: newPerms
                        }
                    }
                });
            }
        }
        if (body.actionsToRemove && body.actionsToRemove.length > 0) {
            const namesToRemove = body.actionsToRemove.map(a => `${group.name}:${this.normalizeName(a)}`);
            await this.prisma.permission.deleteMany({
                where: {
                    groupId: id,
                    name: { in: namesToRemove }
                }
            });
        }
        const updatedGroup = await this.prisma.permissionGroup.findUnique({
            where: { id },
            include: { permissions: true }
        });
        return { data: updatedGroup };
    }
    async deleteGroup(id) {
        await this.prisma.permissionGroup.delete({ where: { id } });
        return { data: { success: true } };
    }
    async deletePermission(id) {
        await this.prisma.permission.delete({ where: { id } });
        return { data: { success: true } };
    }
};
exports.PermissionService = PermissionService;
exports.PermissionService = PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PermissionService);
//# sourceMappingURL=permission.service.js.map