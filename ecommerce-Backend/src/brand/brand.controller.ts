import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('brand')
export class BrandController {
  
  @Get()
  @Permissions('brand:read')
  findAll() {}

  @Get(':id')
  @Permissions('brand:read')
  findOne(@Param('id') id: string) {}

  @Post()
  @Permissions('brand:create')
  create(@Body() body: any) {}

  @Patch(':id')
  @Permissions('brand:update')
  update(@Param('id') id: string, @Body() body: any) {}

  @Delete(':id')
  @Permissions('brand:delete')
  remove(@Param('id') id: string) {}
}
