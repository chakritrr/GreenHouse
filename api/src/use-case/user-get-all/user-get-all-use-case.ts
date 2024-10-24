import { Injectable } from '@nestjs/common';

import { UserGetAllFactoryService } from './user-get-all-factory.service';
import { IUserRepository } from 'src/core';

@Injectable()
export class UserGetAllUseCase {
  constructor(
    private readonly userGetAllFactoryService: UserGetAllFactoryService,
    private readonly iUserRepository: IUserRepository,
  ) {}

  async getAllUser() {
    const userEntity = await this.iUserRepository.findAll();
    return this.userGetAllFactoryService.constructResponse(userEntity);
  }
}
