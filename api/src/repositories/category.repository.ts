import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity, ICategoryRepository } from 'src/core';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryEntity: Repository<CategoryEntity>,
  ) {}

  findAll(): Promise<CategoryEntity[]> {
    return this.categoryEntity.find();
  }

  findOneCategory(id: string): Promise<CategoryEntity> {
    let query = `DELETE FROM category WHERE id = '${id}'`;
    return this.categoryEntity.query(query);
  }

  findOneById(id: string): Promise<CategoryEntity> {
    return this.categoryEntity.findOne({
      where: {
        id,
      },
    });
  }
}
