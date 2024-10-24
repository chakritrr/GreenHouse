import { Injectable } from '@nestjs/common';

import { IProductRepository, PostProductSearchRequestDto } from 'src/core';

@Injectable()
export class ProductCreateSearchUseCase {
  constructor(private readonly iProductRepository: IProductRepository) {}

  createProductSearch(
    postProductSearchRequestDto: PostProductSearchRequestDto,
  ) {
    return this.iProductRepository.findProductSearchFilter(
      postProductSearchRequestDto,
    );
  }
}
