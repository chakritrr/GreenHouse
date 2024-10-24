import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { UserCreateChangeRoleFactoryService } from './user-create-change-role-factory.service';
import { IUserRepository, PostChangeRoleRequestDto } from 'src/core';

@Injectable()
export class UserCreateChangeRoleUseCase {
  constructor(
    private readonly dataSource: DataSource,
    private readonly userCreateChangeRoleFactoryService: UserCreateChangeRoleFactoryService,
    private readonly iUserRepository: IUserRepository,
  ) {}

  async createUserChangeRole(
    postChangRoleRequestDto: PostChangeRoleRequestDto,
  ) {
    const { id } = postChangRoleRequestDto;
    const userById = await this.iUserRepository.findOneById(id);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const userEntity =
        this.userCreateChangeRoleFactoryService.createUserChangeRole(
          postChangRoleRequestDto,
          userById,
        );
      await queryRunner.manager.save(userEntity);
      await queryRunner.commitTransaction();

      return this.userCreateChangeRoleFactoryService.constructResponse(userEntity.id);
    } catch (err) {
      console.log(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
