import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './logindto.dto';
import { isPublic } from 'src/public/public.reflector';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @isPublic()
  @Post()
  loginUser(@Body() fields: LoginDto) {
    return this.loginService.loginUser(fields);
  }
}
