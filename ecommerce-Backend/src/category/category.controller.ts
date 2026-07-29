import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('category')
export class CategoryController {
  
  @Get()
  @Permissions('category:read')
  findAll() {}

  @Get(':id')
  @Permissions('category:read')
  findOne(@Param('id') id: string) {}

  @Post()
  @Permissions('category:create')
  create(@Body() body: any) {}

  @Patch(':id')
  @Permissions('category:update')
  update(@Param('id') id: string, @Body() body: any) {}

  @Delete(':id')
  @Permissions('category:delete')
  remove(@Param('id') id: string) {}
}
