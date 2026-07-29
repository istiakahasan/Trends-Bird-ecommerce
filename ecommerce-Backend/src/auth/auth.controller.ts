import { Controller, Post, Body, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../common/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: any) {
    return this.authService.login(body);
  }

  @Get('me')
  async getMe(@Req() req: any) {
    // Return the user from the JWT payload
    // req.user is injected by the JWT Strategy
    return {
      data: req.user
    };
  }
}
