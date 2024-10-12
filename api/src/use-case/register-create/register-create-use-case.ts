import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { RegisterRequestDto } from 'src/core/dto';
import { RegisterCreateFactoryService } from './register-create-factory.service';

@Injectable()
export class RegisterCreateUseCase {
  constructor(
    private readonly dataSource: DataSource,
    private readonly registerCreateFactoryService: RegisterCreateFactoryService,
  ) {}

  async createRegister(registerRequestDto: RegisterRequestDto) {
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
