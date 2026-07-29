import { Controller, Get, Post, Patch, Delete, Param, Body, Query, Req, ParseIntPipe } from '@nestjs/common';
import { Permissions } from '../common/decorators/permissions.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  
  @Get()
  @Permissions('user:read')
  findAll(@Query() query: any) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  @Permissions('user:read')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  @Permissions('user:create')
  create(@Body() body: any) {
    return this.userService.create(body);
  }

  @Patch(':id')
  @Permissions('user:update')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any, @Req() req: any) {
    return this.userService.update(id, req.user.userId, body);
  }

  @Delete(':id')
  @Permissions('user:delete')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
