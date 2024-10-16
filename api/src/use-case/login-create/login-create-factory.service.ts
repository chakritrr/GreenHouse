import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { LoginRequestDto, UserEntity } from 'src/core';

@Injectable()
export class LoginCreateFactoryService {
  async comparePassword(user: UserEntity, loginRequestDto: LoginRequestDto) {
    const { username, password } = loginRequestDto;

    if (!user) {
      return 'User not found';
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (username && isPasswordValid) {
      return user.password;
    }
    return 'Invalid username or password not match';
  }

  constructResponse() {
    return;
  }
}
