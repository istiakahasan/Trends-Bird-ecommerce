import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('role')
export class RoleController {
  
  @Get()
  @Permissions('role:read')
  findAll() {}

  @Get(':id')
  @Permissions('role:read')
  findOne(@Param('id') id: string) {}

  @Post()
  @Permissions('role:create')
  create(@Body() body: any) {}

  @Patch(':id')
  @Permissions('role:update')
  update(@Param('id') id: string, @Body() body: any) {}

  @Delete(':id')
  @Permissions('role:delete')
  remove(@Param('id') id: string) {}
}
