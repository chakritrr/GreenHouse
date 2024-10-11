import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IUserRepository } from 'src/core';
import { LoginCreateFactoryService } from './login-create-factory.service';
import { LoginRequestDto } from 'src/core/dto';

@Injectable()
export class LoginCreateUseCase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly loginCreateFactoryService: LoginCreateFactoryService,
    private readonly iUserRepository: IUserRepository,
  ) {}

  async loginCreate(loginRequestDto: LoginRequestDto) {
    const { email, password } = loginRequestDto;
    const user = await this.iUserRepository.findOneUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    return token;
  }
}
