import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('attribute')
export class AttributeController {
  
  @Get()
  @Permissions('attribute:read')
  findAll() {}

  @Get(':id')
  @Permissions('attribute:read')
  findOne(@Param('id') id: string) {}

  @Post()
  @Permissions('attribute:create')
  create(@Body() body: any) {}

  @Patch(':id')
  @Permissions('attribute:update')
  update(@Param('id') id: string, @Body() body: any) {}

  @Delete(':id')
  @Permissions('attribute:delete')
  remove(@Param('id') id: string) {}

  // Nested Route: Attribute Values
  @Patch(':id/values')
  @Permissions('attribute:update')
  updateValues(@Param('id') id: string, @Body() body: any) {}
}
