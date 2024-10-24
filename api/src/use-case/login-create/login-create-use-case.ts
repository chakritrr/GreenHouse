import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IUserRepository } from 'src/core';
import { LoginRequestDto, LoginResponseDto } from 'src/core/dto';
import { LoginCreateFactoryService } from './login-create-factory.service';

@Injectable()
export class LoginCreateUseCase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly iUserRepository: IUserRepository,
    private readonly loginCreateFactoryService: LoginCreateFactoryService,
  ) {}

  async loginCreate(loginRequestDto: LoginRequestDto) {
    const { username } = loginRequestDto;
    const userEntity = await this.iUserRepository.findOneUserByUsername(username);
    const comparePassword = await this.loginCreateFactoryService.comparePassword(userEntity, loginRequestDto);

    const dataUser = await this.iUserRepository.findOneUser(
      username,
      comparePassword,
    );

    // ตรง patload อาจจะต้องปรับปรุงโดยการเพิ่มข้อมูล role ไปไว้ทำหรับทำ Guard Role ในอนาคต

    const payload = { email: dataUser.email, sub: dataUser.id };
    const token = this.jwtService.sign(payload);

    const resp: LoginResponseDto = {
      token: token,
    };

    return resp;
  }
}
