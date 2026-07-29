import { Controller, Get, Post, Patch, Delete, Param, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('media')
export class MediaController {
  
  @Get()
  @Permissions('media:read')
  findAll() {}

  @Get(':id')
  @Permissions('media:read')
  findOne(@Param('id') id: string) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @Permissions('media:upload')
  uploadFile(@UploadedFile() file: any) {}

  @Post()
  @Permissions('media:write')
  create(@Body() body: any) {}

  @Delete(':id')
  @Permissions('media:delete')
  remove(@Param('id') id: string) {}
}
