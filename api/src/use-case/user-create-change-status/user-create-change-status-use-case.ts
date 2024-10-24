import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { IUserRepository, PostChangStatusRequestDto } from 'src/core';
import { UserCreateChangeStatusFactoryService } from './user-create-change-status-factory.service';

@Injectable()
export class UserCreateChangeStatusUseCase {
  constructor(
    private readonly iUserRepository: IUserRepository,
    private readonly dataSource: DataSource,
    private readonly userCreateChangeStatusFactoryService: UserCreateChangeStatusFactoryService,
  ) {}

  async createUserChangeStatus(
    postChangStatusRequestDto: PostChangStatusRequestDto,
  ) {
    const { id } = postChangStatusRequestDto;
    const userById = await this.iUserRepository.findOneById(id);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const userEntity =
        this.userCreateChangeStatusFactoryService.createUserChangeStatus(
          postChangStatusRequestDto,
          userById,
        );
      await queryRunner.manager.save(userEntity);
      await queryRunner.commitTransaction();

      return this.userCreateChangeStatusFactoryService.constructResponse(
        userEntity.id,
      );
    } catch (err) {
      console.log(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    return postChangStatusRequestDto;
  }
}
