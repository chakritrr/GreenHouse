import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IUserRepository, UserEntity } from 'src/core';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}

  findOneUser(email: string, password: string): Promise<UserEntity> {
    return this.userEntity.findOneBy({ email, password });
  }
}
