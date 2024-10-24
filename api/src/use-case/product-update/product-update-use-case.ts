import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import {
  ICategoryRepository,
  IProductRepository,
  PatchProductRequestDto,
} from 'src/core';
import { ProductUpdateFactoryService } from './product-update-factory.service';

@Injectable()
export class ProductUpdateUseCase {
  constructor(
    private readonly iProductRepository: IProductRepository,
    private readonly dataSource: DataSource,
    private readonly productUpdateFactoryService: ProductUpdateFactoryService,
    private readonly iCategoryRepository: ICategoryRepository,
  ) {}

  async updateProductById(
    id: string,
    patchProductRequestDto: PatchProductRequestDto,
  ) {
    const { categoryId } = patchProductRequestDto;
    const productEntityById = await this.iProductRepository.findOneById(id);
    const categoryEntity =
      await this.iCategoryRepository.findOneById(categoryId);
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const productEntity = this.productUpdateFactoryService.updateProduct(
        patchProductRequestDto,
        productEntityById,
        categoryEntity,
      );
      const imageEntity = productEntity.images;

      await queryRunner.manager.save(imageEntity);
      await queryRunner.manager.save(productEntity);
      await queryRunner.commitTransaction();

      return this.productUpdateFactoryService.constructResponse(id);
    } catch (err) {
      console.log(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
