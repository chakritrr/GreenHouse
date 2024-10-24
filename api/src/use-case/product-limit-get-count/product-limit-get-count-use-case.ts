import { Injectable } from '@nestjs/common';
import { IProductRepository } from 'src/core';
import { ProductLimitGetCountFactoryService } from './product-limit-get-count-factory.service';

@Injectable()
export class ProductLimitGetCountUseCase {
  constructor(
    private readonly iProductRepository: IProductRepository,
    private readonly productLimitGetCountFactoryService: ProductLimitGetCountFactoryService,
  ) {}

  async getProductLimitByCount(count: number) {
    const productEntity = await this.iProductRepository.findProductLimit(count);
    return this.productLimitGetCountFactoryService.constructResponse(
      productEntity,
    );
  }
}
