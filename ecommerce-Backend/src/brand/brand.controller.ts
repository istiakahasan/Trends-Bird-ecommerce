import { Controller, Get, Post, Patch, Delete, Param, Body, Query, ParseIntPipe } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';
import { BrandService } from './brand.service';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  @Permissions('brand:read')
  findAll(@Query() query: any) {
    return this.brandService.findAll(query);
  }

  @Get(':id')
  @Permissions('brand:read')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.findOne(id);
  }

  @Post()
  @Permissions('brand:create')
  create(@Body() body: any) {
    return this.brandService.create(body);
  }

  @Patch(':id')
  @Permissions('brand:update')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.brandService.update(id, body);
  }

  @Delete(':id')
  @Permissions('brand:delete')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.remove(id);
  }
}
