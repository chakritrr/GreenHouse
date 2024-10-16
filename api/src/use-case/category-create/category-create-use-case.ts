import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { PostCategoryRequestDto } from 'src/core';
import { CategoryCreateFactoryService } from './category-create-factory.service';

@Injectable()
export class CategoryCreateUseCase {
  constructor(
    private readonly dataSource: DataSource,
    private readonly categoryCreateFactoryService: CategoryCreateFactoryService,
  ) {}

  async createCategory(postCategoryRequestDto: PostCategoryRequestDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const categoryEntity = this.categoryCreateFactoryService.createCategory(postCategoryRequestDto);
      await queryRunner.manager.save(categoryEntity);

      await queryRunner.commitTransaction();

      return this.categoryCreateFactoryService.constructResponse(categoryEntity.id)
    } catch (err) {
      console.log(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
