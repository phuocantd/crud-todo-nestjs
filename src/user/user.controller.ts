import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post('sign-up')
  async signUp(@Body() body: any) {
    return this.usersService.signUp(body.username, body.password);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post('sign-in')
  async signIn(@Body() body: any) {
    return this.usersService.signIn(body.username, body.password);
  }
}
