import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Request() request) {

  }

  @Post('login-with-facebook')
  async loginWithFacebook(@Request() request) {

  }

  @Post('link-with-facebook')
  async linkWithFacebook(@Request() request) {

  }

  @Post('unlink-with-facebook')
  async unlinkWithFacebook(@Request() request) {

  }

  @Post('login-with-google')
  async loginWithGoogle(@Request() request) {

  }

  @Post('link-with-google')
  async linkWithGoogle(@Request() request) {

  }

  @Post('unlink-with-google')
  async unlinkWithGoogle(@Request() request) {

  }

  @Post('logout')
  async logout(@Request() request) {

  }

  @Post('change-password')
  async changePassword(@Request() request) {
    
  }

  @Post('register')
  async register(@Request() request) {
    
  }

  @Post('refresh-token')
  async refreshToken(@Request() request) {
    
  }

  @Post('verify-token')
  async verifyToken(@Request() request) {
    
  }
}
