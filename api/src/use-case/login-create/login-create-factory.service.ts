import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { LoginRequestDto, UserEntity } from 'src/core';

@Injectable()
export class LoginCreateFactoryService {
  async comparePassword(user: UserEntity, loginRequestDto: LoginRequestDto) {
    const { username, password } = loginRequestDto;

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (username && isPasswordValid) {
      return user.password;
    }

    throw new UnauthorizedException('Invalid username or password');
  }

  constructResponse() {}
}
