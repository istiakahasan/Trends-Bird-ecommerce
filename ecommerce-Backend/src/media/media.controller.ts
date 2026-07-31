import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  Req,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { Permissions } from '../common/decorators/permissions.decorator';
import { MediaService } from './media.service';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediaQueryDto } from './dto/media-query.dto';

const multerOptions = { storage: memoryStorage() };

@ApiTags('Media')
@ApiBearerAuth()
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('upload')
  @Permissions('media:upload')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('file', multerOptions))
  @ApiOperation({ summary: 'Upload a single file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: any,
  ) {
    return this.mediaService.uploadFiles([file], req.user.sub);
  }

  @Post('upload/bulk')
  @Permissions('media:upload')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FilesInterceptor('files', 20, multerOptions))
  @ApiOperation({ summary: 'Upload multiple files (max 20)' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: {
          type: 'array',
          items: { type: 'string', format: 'binary' },
        },
      },
    },
  })
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
    @Req() req: any,
  ) {
    return this.mediaService.uploadFiles(files, req.user.sub);
  }

  @Get()
  @Permissions('media:read')
  @ApiOperation({ summary: 'List all media assets (paginated, searchable, filterable by type)' })
  findAll(@Query() query: MediaQueryDto) {
    return this.mediaService.findAll(query);
  }

  @Get(':id')
  @Permissions('media:read')
  @ApiOperation({ summary: 'Get a single media asset with attached products' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.mediaService.findOne(id);
  }

  @Patch(':id')
  @Permissions('media:write')
  @ApiOperation({ summary: 'Update media metadata (alt text, title)' })
  @ApiParam({ name: 'id', type: Number })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMediaDto,
  ) {
    return this.mediaService.update(id, dto);
  }

  @Delete(':id')
  @Permissions('media:delete')
  @ApiOperation({
    summary: 'Delete a media asset — detaches from all products, removes file from disk',
  })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.mediaService.remove(id);
  }
}
