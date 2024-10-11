import { Body, Controller, Post } from '@nestjs/common';

import { LoginRequestDto } from 'src/core/dto';
import { LoginCreateUseCase } from 'src/use-case/login-create/login-create-use-case';

@Controller()
export class LoginController {
  constructor(private readonly loginCreateUseCase: LoginCreateUseCase) {}

  @Post('/v1/login')
  async register(@Body() loginRequestDto: LoginRequestDto) {
    return this.loginCreateUseCase.loginCreate(loginRequestDto);
  }
}
