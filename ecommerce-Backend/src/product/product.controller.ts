import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('product')
export class ProductController {
  
  @Get()
  @Permissions('product:read')
  findAll() {}

  @Get(':id')
  @Permissions('product:read')
  findOne(@Param('id') id: string) {}

  @Post()
  @Permissions('product:create')
  create(@Body() body: any) {}

  @Patch(':id')
  @Permissions('product:update')
  update(@Param('id') id: string, @Body() body: any) {}

  @Delete(':id')
  @Permissions('product:delete')
  remove(@Param('id') id: string) {}

  // Nested Route: Variants
  @Patch(':id/variants')
  @Permissions('product:update')
  updateVariants(@Param('id') id: string, @Body() body: any) {}
}
