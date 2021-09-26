import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Req() request) {

  }

  @Post('login-with-facebook')
  async loginWithFacebook(@Req() request) {

  }

  @Post('link-with-facebook')
  async linkWithFacebook(@Req() request) {

  }

  @Post('unlink-with-facebook')
  async unlinkWithFacebook(@Req() request) {

  }

  @Post('login-with-google')
  async loginWithGoogle(@Req() request) {

  }

  @Post('link-with-google')
  async linkWithGoogle(@Req() request) {

  }

  @Post('unlink-with-google')
  async unlinkWithGoogle(@Req() request) {

  }

  @Post('logout')
  async logout(@Req() request) {

  }

  @Post('change-password')
  async changePassword(@Req() request) {
    
  }

  @Post('register')
  async register(@Req() request) {
    
  }

  @Post('refresh-token')
  async refreshToken(@Req() request) {
    
  }

  @Post('validate-token')
  async validateToken(@Req() request) {
    
  }
}
