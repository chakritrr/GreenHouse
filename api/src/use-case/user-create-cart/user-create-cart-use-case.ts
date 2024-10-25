import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { UserCreateCartFactoryService } from './user-create-cart-factory.service';
import { PostUserCartRequestDto } from 'src/core';

@Injectable()
export class UserCreateCartUseCase {
  constructor(
    private readonly userCreateCartFactoryService: UserCreateCartFactoryService,
    private readonly dataSource: DataSource,
  ) {}

  async createUserCart(
    userId: string,
    postUserCartRequestDto: PostUserCartRequestDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // await queryRunner.manager.save('');
      await queryRunner.commitTransaction();

      // return this.userCreateCartFactoryService.constructResponse('');
      console.log(userId);
      return postUserCartRequestDto;
    } catch (err) {
      console.log(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
