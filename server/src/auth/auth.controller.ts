import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './authDto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto.username, authDto.password);
  }

  @Post('register')
  register(@Body() authDto: AuthDto) {
    return this.authService.register(authDto.username, authDto.password);
  }
}
