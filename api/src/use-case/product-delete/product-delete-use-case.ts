import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

import {
  ImageEntity,
  ProductEntity,
  ProductOnCartEntity,
  ProductOnOrderEntity,
} from 'src/core';
import { ProductDeleteFactoryService } from './product-delete-factory.service';

@Injectable()
export class ProductDeleteUseCase {
  constructor(
    private readonly dataSource: DataSource,
    private readonly productDeleteFactoryService: ProductDeleteFactoryService,
  ) {}

  async deleteProduct(productId: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.delete(ProductOnOrderEntity, {
        productId: productId,
      });

      await queryRunner.manager.delete(ProductOnCartEntity, {
        productId: productId,
      });

      await queryRunner.manager.delete(ImageEntity, {
        productId: productId,
      });

      await queryRunner.manager.delete(ProductEntity, {
        id: productId,
      });
      await queryRunner.commitTransaction();

      return this.productDeleteFactoryService.constructResponse(productId);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
