import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('user')
export class UserController {
  
  @Get()
  @Permissions('user:read')
  findAll() {}

  @Get(':id')
  @Permissions('user:read')
  findOne(@Param('id') id: string) {}

  @Post()
  @Permissions('user:create')
  create(@Body() body: any) {}

  @Patch(':id')
  @Permissions('user:update')
  update(@Param('id') id: string, @Body() body: any) {}

  @Delete(':id')
  @Permissions('user:delete')
  remove(@Param('id') id: string) {}
}
