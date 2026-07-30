import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMediaDto {
  @ApiPropertyOptional({ example: 'Hero banner showing summer collection' })
  @IsOptional()
  @IsString()
  altText?: string;

  @ApiPropertyOptional({ example: 'Summer 2025 Hero' })
  @IsOptional()
  @IsString()
  title?: string;
}
