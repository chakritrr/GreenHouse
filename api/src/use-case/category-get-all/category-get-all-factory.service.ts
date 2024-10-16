import { Injectable } from '@nestjs/common';
import { CategoryEntity, GetCategoryResponseDto } from 'src/core';

@Injectable()
export class CategoryGetAllFactoryService {

  constructResponse(categoryEntities: CategoryEntity[]) {
    const resp = categoryEntities.map((categoryEntity) => {
      const { id, name, createdAt, updatedAt } = categoryEntity;
      
      const GetCategoryResDto = new GetCategoryResponseDto();
      GetCategoryResDto.id = id;
      GetCategoryResDto.name = name;
      GetCategoryResDto.createdAt = createdAt.toISOString();
      GetCategoryResDto.updatedAt = updatedAt.toISOString();

      return GetCategoryResDto;
    });

    return resp;
  }
}
