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

  findOneUser(username: string, password: string): Promise<UserEntity> {
    return this.userEntity.findOneBy({
      username: username,
      password: password,
    });
  }

  findOneUserByUsername(username: string): Promise<UserEntity> {
    return this.userEntity.findOneBy({ username: username });
  }

  findAll(): Promise<UserEntity[]>  {
    return this.userEntity.find()
  }
}
