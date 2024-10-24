import { Injectable } from '@nestjs/common';

import { IProductRepository, PostProductSortRequestDto } from 'src/core';
import { ProductCreateSortFactoryService } from './product-create-sort-factory.service';

@Injectable()
export class ProductCreateSortUseCase {
  constructor(
    private readonly productCreateSortFactoryService: ProductCreateSortFactoryService,
    private readonly iProductRepository: IProductRepository,
  ) {}

  async createProductSort(
    postProductSortRequestDto: PostProductSortRequestDto,
  ) {
    return await this.iProductRepository.findProductBySort(
      postProductSortRequestDto,
    );
  }
}
