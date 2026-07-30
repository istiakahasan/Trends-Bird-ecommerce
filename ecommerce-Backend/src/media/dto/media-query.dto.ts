import { IsOptional, IsString, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class MediaQueryDto extends PaginationDto {
  @ApiPropertyOptional({
    enum: ['image', 'video', 'document'],
    description: 'Filter by media type',
  })
  @IsOptional()
  @IsString()
  @IsIn(['image', 'video', 'document'])
  type?: string;
}
