import { IsString, IsNotEmpty, IsOptional, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAttributeValueDto {
  @ApiProperty({ example: 'Red', description: 'Display label for the value' })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({ example: 'red', description: 'URL-safe slug, unique within its attribute' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug must be lowercase letters, numbers, and hyphens only',
  })
  slug: string;

  @ApiPropertyOptional({
    example: '#FF0000',
    description: 'Hex code for colour swatches, or media URL for image swatches',
  })
  @IsString()
  @IsOptional()
  reference?: string;
}
