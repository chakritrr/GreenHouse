import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { IUserRepository } from 'src/core';
import { RegisterRequestDto } from 'src/core/dto';
import { RegisterCreateFactoryService } from './register-create-factory.service';

@Injectable()
export class RegisterCreateUseCase {
  constructor(
    private readonly dataSource: DataSource,
    private readonly iUserRepository: IUserRepository,
    private readonly registerCreateFactoryService: RegisterCreateFactoryService,
  ) {}

  async createRegister(registerRequestDto: RegisterRequestDto) {
    const { username, email } = registerRequestDto
    const users = await this.iUserRepository.findAll();

    const isUsernameDuplicate = users.some((user) => user.username === username);
    if (isUsernameDuplicate) {
      return 'Username already exists';
    }

    const isEmailDuplicate = users.some((user) => user.email === email);
    if (isEmailDuplicate) {
      return 'Email already exists';
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const userEntity = await this.registerCreateFactoryService.createResgister(registerRequestDto);
      await queryRunner.manager.save(userEntity);
      await queryRunner.commitTransaction();

      return this.registerCreateFactoryService.constructResponse(userEntity.id);
    } catch (error) {
      console.error(error);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
