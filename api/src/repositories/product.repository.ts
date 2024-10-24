import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  IProductRepository,
  PostProductSearchRequestDto,
  PostProductSortRequestDto,
  ProductEntity,
} from 'src/core';

export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productEntity: Repository<ProductEntity>,
  ) {}

  findOneById(id: string): Promise<ProductEntity> {
    return this.productEntity.findOne({
      where: {
        id: id,
      },
      relations: {
        categoryId: true,
        images: true,
      },
    });
  }

  findProductLimit(count: number): Promise<ProductEntity[]> {
    return this.productEntity.find({
      take: count,
      order: {
        createdAt: 'DESC',
      },
      relations: {
        categoryId: true,
        images: true,
      },
    });
  }

  findProductBySort(
    postProductSortRequestDto: PostProductSortRequestDto,
  ): Promise<ProductEntity[]> {
    const { sort, order, limit } = postProductSortRequestDto;

    return this.productEntity.find({
      take: limit,
      order: {
        [sort]: order,
      },
      relations: {
        categoryId: true,
      },
    });
  }

  async findProductSearchFilter(postProductSearchRequestDto: PostProductSearchRequestDto) {
    const { query, category, price } = postProductSearchRequestDto;
  
    const params = [];
  
    let sql = `
      SELECT p.*, c.*, i.*
      FROM Product p
      LEFT JOIN Category c ON p.categoryId = c.id 
      LEFT JOIN Image i ON i.productId = p.id
      WHERE 1=1
    `;
  
    if (query) {
      sql += ` AND p.title LIKE ?`;
      params.push(`%${query}%`);
    }
  
    if (price) {
      sql += ` AND p.price >= ? AND p.price <= ?`;
      params.push(price[0], price[1]);
    }
  
    if (category && category.length > 0) {
      sql += ` AND p.categoryId IN (${category.map(() => '?').join(',')})`;
      params.push(...category);
    }
  
    return await this.productEntity.query(sql, params)
  }
}
