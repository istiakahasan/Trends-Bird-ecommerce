import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PermissionService {
  constructor(private prisma: PrismaService) {}

  private normalizeName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '');
  }

  async createGroup(body: { name: string; description?: string; actions: string[] }) {
    if (!body.name || !body.actions || body.actions.length === 0) {
      throw new BadRequestException('Group name and at least one action are required.');
    }
    const groupName = this.normalizeName(body.name);

    const existingGroup = await this.prisma.permissionGroup.findUnique({
      where: { name: groupName }
    });
    if (existingGroup) {
      throw new ConflictException(`Group '${groupName}' already exists`);
    }

    const permissionNames = body.actions.map(a => `${groupName}:${this.normalizeName(a)}`);
    
    const existingPerms = await this.prisma.permission.findMany({
      where: { name: { in: permissionNames } }
    });
    if (existingPerms.length > 0) {
      throw new ConflictException(`Some permissions already exist: ${existingPerms.map(p => p.name).join(', ')}`);
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

  async getGroups(query: { search?: string; page?: string; limit?: string }) {
    const page = parseInt(query.page || '1');
    const limit = parseInt(query.limit || '10');
    const skip = (page - 1) * limit;

    const whereClause: any = {};
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

  async updateGroup(id: number, body: { actionsToAdd?: string[], actionsToRemove?: string[] }) {
    const group = await this.prisma.permissionGroup.findUnique({ where: { id }, include: { permissions: true } });
    if (!group) throw new BadRequestException('Group not found');

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

  async deleteGroup(id: number) {
    await this.prisma.permissionGroup.delete({ where: { id } });
    return { data: { success: true } };
  }

  async deletePermission(id: number) {
    await this.prisma.permission.delete({ where: { id } });
    return { data: { success: true } };
  }
}
