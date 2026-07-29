import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('permission')
export class PermissionController {
  
  @Get()
  @Permissions('permission:read')
  findAll() {}

  @Get(':id')
  @Permissions('permission:read')
  findOne(@Param('id') id: string) {}

  @Post()
  @Permissions('permission:create')
  create(@Body() body: any) {}

  @Patch(':id')
  @Permissions('permission:update')
  update(@Param('id') id: string, @Body() body: any) {}

  @Delete(':id')
  @Permissions('permission:delete')
  remove(@Param('id') id: string) {}
}
