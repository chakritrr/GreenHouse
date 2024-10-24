import { Injectable } from '@nestjs/common';
import { IProductRepository } from 'src/core';
import { ProductGetByIdFactoryService } from './product-get-id-factory.service';

@Injectable()
export class ProductGetByIdUseCase {
  constructor(
    private readonly iProductRepository: IProductRepository,
    private readonly productGetByIdFactoryService: ProductGetByIdFactoryService,
  ) {}

  async getProductById(id: string) {
    const productEntity = await this.iProductRepository.findOneById(id);
    return this.productGetByIdFactoryService.constructResponse(productEntity);
  }
}
