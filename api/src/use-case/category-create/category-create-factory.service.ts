import { Injectable } from '@nestjs/common';

import {
  CategoryEntity,
  PostCategoryRequestDto,
  PostCategoryResponseDto,
} from 'src/core';

@Injectable()
export class CategoryCreateFactoryService {
  createCategory(postCategoryRequestDto: PostCategoryRequestDto) {
    const { name } = postCategoryRequestDto;

    const catagoryEntity = new CategoryEntity();
    catagoryEntity.name = name;
    catagoryEntity.createdAt = new Date();
    catagoryEntity.updatedAt = new Date();

    return catagoryEntity;
  }

  constructResponse(id: string) {
    const resp = new PostCategoryResponseDto();
    resp.id = id;

    return resp;
  }
}
