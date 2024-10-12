import { Body, Controller, Post } from '@nestjs/common';

import { RegisterCreateUseCase } from 'src/use-case/register-create/register-create-use-case';
import { RegisterRequestDto } from 'src/core/dto';

@Controller()
export class RegisterController {
  constructor(private readonly registerCreateUseCase: RegisterCreateUseCase) {}

  @Post('/v1/register')
  createRegister(@Body() registerRequestDto: RegisterRequestDto) {
    return this.registerCreateUseCase.createRegister(registerRequestDto);
  }
}
