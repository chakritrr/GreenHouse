import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IUserRepository } from 'src/core';
import { LoginCreateFactoryService } from './login-create-factory.service';
import { LoginRequestDto, LoginResponseDto } from 'src/core/dto';

@Injectable()
export class LoginCreateUseCase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly iUserRepository: IUserRepository,
    private readonly loginCreateFactoryService: LoginCreateFactoryService,
  ) {}

  async loginCreate(loginRequestDto: LoginRequestDto) {
    const { email, password } = loginRequestDto;
    const user = await this.iUserRepository.findOneUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    const resp: LoginResponseDto = {
      token: token,
    };

    return resp;
  }
}
