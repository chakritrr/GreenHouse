import { Injectable } from '@nestjs/common';

import { ICategoryRepository } from 'src/core';
import { CategoryDeleteFactoryService } from './category-delete-factory.service';

@Injectable()
export class CategoryDeleteUseCase {
  constructor(
    private readonly iCategoryRepository: ICategoryRepository,
    private readonly categoryDeleteFactoryService: CategoryDeleteFactoryService,
  ) {}

  async deleteCategory(id: string) {
    try {
      const categoryEntity = await this.iCategoryRepository.findOneById(id);
      if (!categoryEntity) {
        return `Category with id not found`;
      }
      await this.iCategoryRepository.findOneCategory(id);
      return this.categoryDeleteFactoryService.constructResponse(id);
    } catch (error) {
      return `Category with id not found`;
    }
  }
}
