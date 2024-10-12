import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { RegisterRequestDto } from 'src/core/dto';
import { UserEntity } from 'src/core';
import { RegisterResponseDto } from 'src/core/dto/register/register-response.dto';

@Injectable()
export class RegisterCreateFactoryService {
  async createResgister(registerRequestDto: RegisterRequestDto) {
    const { email, password, username } = registerRequestDto;
    const hash = await bcrypt.hash(password, 10);

    const userEntity = new UserEntity();
    userEntity.email = email;
    userEntity.password = hash;
    userEntity.username = username;
    userEntity.createdAt = new Date();
    userEntity.updateAt = new Date();

    return userEntity;
  }

  constructResponse(id: string) {
    const resp = new RegisterResponseDto();
    resp.id = id;

    return resp;
  }
}
