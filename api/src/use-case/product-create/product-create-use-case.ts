import { Injectable } from '@nestjs/common';

import { ICategoryRepository, PostProductRequestDto } from 'src/core';
import { ProductCreateFactoryService } from './product-create-factory.service';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductCreateUseCase {
  constructor(
    private readonly productCreateFactoryService: ProductCreateFactoryService,
    private readonly iCategoryRepository: ICategoryRepository,
    private readonly dataSource: DataSource,
  ) {}

  async createProduct(postProductRequestDto: PostProductRequestDto) {
    const { categoryId } = postProductRequestDto;
    const categoryEntity =
      await this.iCategoryRepository.findOneById(categoryId);

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      const productEntity = this.productCreateFactoryService.createProduct(
        postProductRequestDto,
        categoryEntity,
      );

      const imageEntity = productEntity.images

      await queryRunner.manager.save(imageEntity);
      await queryRunner.manager.save(productEntity);

      await queryRunner.commitTransaction();

      return this.productCreateFactoryService.constructResponse(
        productEntity.id,
      );
    } catch (err) {
      console.log(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
