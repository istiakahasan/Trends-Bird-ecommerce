import { Controller, Post, Get, Patch, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Permissions('permission:create')
  @Post('group')
  async createGroup(@Body() body: any) {
    return this.permissionService.createGroup(body);
  }

  @Permissions('permission:read')
  @Get('group')
  async getGroups(@Query() query: any) {
    return this.permissionService.getGroups(query);
  }

  @Permissions('permission:update')
  @Patch('group/:id')
  async updateGroup(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.permissionService.updateGroup(id, body);
  }

  @Permissions('permission:delete')
  @Delete('group/:id')
  async deleteGroup(@Param('id', ParseIntPipe) id: number) {
    return this.permissionService.deleteGroup(id);
  }

  @Permissions('permission:delete')
  @Delete(':id')
  async deletePermission(@Param('id', ParseIntPipe) id: number) {
    return this.permissionService.deletePermission(id);
  }
}
