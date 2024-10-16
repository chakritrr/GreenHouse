import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { PostCategoryRequestDto } from 'src/core';
import { CategoryCreateUseCase } from 'src/use-case/category-create/category-create-use-case';
import { CategoryDeleteUseCase } from 'src/use-case/category-delete/category-delete-use-case';
import { CategoryGetAllUseCase } from 'src/use-case/category-get-all/category-get-all-use-case';

@Controller()
export class CategoryController {
  constructor(
    private readonly categoryCreateUseCase: CategoryCreateUseCase,
    private readonly categoryGetAllUseCase: CategoryGetAllUseCase,
    private readonly categoryDeleteUseCase: CategoryDeleteUseCase,
  ) {}

  @Post('/v1/category')
  createCategory(@Body() postCategoryRequestDto: PostCategoryRequestDto) {
    return this.categoryCreateUseCase.createCategory(postCategoryRequestDto);
  }

  @Get('/v1/category')
  getCategory() {
    return this.categoryGetAllUseCase.getAllCategory();
  }

  @Delete('/v1/category/:id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryDeleteUseCase.deleteCategory(id);
  }
}
