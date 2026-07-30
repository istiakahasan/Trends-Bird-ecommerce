import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { Permissions } from '../common/decorators/permissions.decorator';
import { AttributeService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { CreateAttributeValueDto } from './dto/create-attribute-value.dto';
import { UpdateAttributeValueDto } from './dto/update-attribute-value.dto';

@ApiTags('Attribute')
@ApiBearerAuth()
@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  // ─────────────────────────────────────────────────────────────
  // Attribute endpoints
  // ─────────────────────────────────────────────────────────────

  @Get()
  @Permissions('attribute:read')
  @ApiOperation({ summary: 'List all attributes (paginated, searchable, filterable by type)' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'type', required: false })
  @ApiQuery({ name: 'page', required: false, example: '1' })
  @ApiQuery({ name: 'limit', required: false, example: '10' })
  findAll(@Query() query: any) {
    return this.attributeService.findAll(query);
  }

  @Get(':id')
  @Permissions('attribute:read')
  @ApiOperation({ summary: 'Get a single attribute with all its values' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.attributeService.findOne(id);
  }

  @Post()
  @Permissions('attribute:create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new attribute (with optional inline values)' })
  create(@Body() dto: CreateAttributeDto) {
    return this.attributeService.create(dto);
  }

  @Patch(':id')
  @Permissions('attribute:update')
  @ApiOperation({ summary: 'Update an attribute name, slug, or type' })
  @ApiParam({ name: 'id', type: Number })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAttributeDto) {
    return this.attributeService.update(id, dto);
  }

  @Delete(':id')
  @Permissions('attribute:delete')
  @ApiOperation({
    summary: 'Delete an attribute — blocked if any of its values are used by a product variant',
  })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.attributeService.remove(id);
  }

  // ─────────────────────────────────────────────────────────────
  // Value endpoints
  // NOTE: static segments (/value) must come before dynamic (:id)
  // to avoid route collision in NestJS.
  // ─────────────────────────────────────────────────────────────

  @Get('value/:valueId')
  @Permissions('attribute:read')
  @ApiOperation({ summary: 'Get a single attribute value by ID' })
  @ApiParam({ name: 'valueId', type: Number })
  findValue(@Param('valueId', ParseIntPipe) valueId: number) {
    return this.attributeService.findValue(valueId);
  }

  @Post(':id/value')
  @Permissions('attribute:update')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Add a value to an existing attribute' })
  @ApiParam({ name: 'id', type: Number })
  addValue(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateAttributeValueDto,
  ) {
    return this.attributeService.addValue(id, dto);
  }

  @Patch('value/:valueId')
  @Permissions('attribute:update')
  @ApiOperation({ summary: 'Edit an attribute value' })
  @ApiParam({ name: 'valueId', type: Number })
  updateValue(
    @Param('valueId', ParseIntPipe) valueId: number,
    @Body() dto: UpdateAttributeValueDto,
  ) {
    return this.attributeService.updateValue(valueId, dto);
  }

  @Delete('value/:valueId')
  @Permissions('attribute:update')
  @ApiOperation({
    summary: 'Remove a value — blocked if it is used by a product variant',
  })
  @ApiParam({ name: 'valueId', type: Number })
  removeValue(@Param('valueId', ParseIntPipe) valueId: number) {
    return this.attributeService.removeValue(valueId);
  }
}
