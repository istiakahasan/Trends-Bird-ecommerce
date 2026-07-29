import { Controller, Get, Post, Patch, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';
import { AttributeService } from './attribute.service';

@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @Get()
  @Permissions('attribute:read')
  findAll(@Query() query: any) {
    return this.attributeService.findAll(query);
  }

  @Get(':id')
  @Permissions('attribute:read')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.attributeService.findOne(id);
  }

  @Post()
  @Permissions('attribute:create')
  create(@Body() body: any) {
    return this.attributeService.create(body);
  }

  @Patch(':id')
  @Permissions('attribute:update')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.attributeService.update(id, body);
  }

  @Delete(':id')
  @Permissions('attribute:delete')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.attributeService.remove(id);
  }
}
