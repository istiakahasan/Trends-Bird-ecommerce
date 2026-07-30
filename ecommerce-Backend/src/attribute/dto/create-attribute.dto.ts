import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsArray,
  ValidateNested,
  Matches,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateAttributeValueDto } from './create-attribute-value.dto';

export enum AttributeType {
  DROPDOWN = 'dropdown',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  COLOUR_SWATCH = 'colour_swatch',
  IMAGE_SWATCH = 'image_swatch',
}

export class CreateAttributeDto {
  @ApiProperty({ example: 'Colour', description: 'Globally unique attribute name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'colour', description: 'Globally unique URL-safe slug' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug must be lowercase letters, numbers, and hyphens only',
  })
  slug: string;

  @ApiProperty({
    enum: AttributeType,
    example: AttributeType.COLOUR_SWATCH,
    description: 'Presentation type for this attribute',
  })
  @IsEnum(AttributeType, {
    message: `type must be one of: ${Object.values(AttributeType).join(', ')}`,
  })
  type: AttributeType;

  @ApiPropertyOptional({
    type: [CreateAttributeValueDto],
    description: 'Optional initial set of values to create with the attribute',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAttributeValueDto)
  values?: CreateAttributeValueDto[];
}
