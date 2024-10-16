import { Injectable } from '@nestjs/common';

import { ICategoryRepository } from 'src/core';
import { CategoryGetAllFactoryService } from './category-get-all-factory.service';

@Injectable()
export class CategoryGetAllUseCase {
  constructor(
    private readonly iCategoryRepository: ICategoryRepository,
    private readonly categoryGetAllFactoryService: CategoryGetAllFactoryService,
  ) {}

  async getAllCategory() {
    const categoryEntity = await this.iCategoryRepository.findAll();
    return this.categoryGetAllFactoryService.constructResponse(categoryEntity);
  }
}
