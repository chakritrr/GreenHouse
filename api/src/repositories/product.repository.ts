import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  IProductRepository,
  PostProductSearchRequestDto,
  PostProductSearchResponseDto,
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

  async findProductSearchFilter(
    postProductSearchRequestDto: PostProductSearchRequestDto,
  ) {
    const { query, category, price } = postProductSearchRequestDto;

    let STATEMENTS = [];
    const sql = `
      SELECT 
        p.id,
        p.title,
        p.description,
        p.price,
        p.sold,
        p.quantity,
        p."createdAt" as product_created_at,
        p."updatedAt" as product_updated_at,
        
        c.id as category_id,
        c.name as category_name,
        c."createdAt" as category_created_at,
        c."updatedAt" as category_updated_at,
        
        json_agg(
          json_build_object(
            'id', i.id,
            'asset_id', i.asset_id,
            'public_id', i.public_id,
            'url', i.url,
            'secure_url', i.secure_url,
            'createdAt', i."createdAt",
            'updatedAt', i."updatedAt"
          )
        ) as images
      FROM "product" p
      LEFT JOIN "category" c ON c.id = p."categoryId"
      LEFT JOIN "image" i ON i."productId" = p.id
      WHERE 1=1
    `;

    STATEMENTS.push(sql);

    if (query) {
      STATEMENTS.push(` AND p.title ILIKE $1`);
    }

    if (price && Array.isArray(price) && price.length === 2) {
      STATEMENTS.push(` AND p.price >= $2 AND p.price <= $3`);
    }

    if (category && Array.isArray(category) && category.length > 0) {
      STATEMENTS.push(` AND p."categoryId" = ANY($4::uuid[])`);
    }

    STATEMENTS.push(` GROUP BY p.id, c.id`);

    const parameters = [];
    if (query) {
      parameters.push(`%${query}%`);
    }
    if (price && Array.isArray(price) && price.length === 2) {
      parameters.push(price[0], price[1]);
    }
    if (category && Array.isArray(category) && category.length > 0) {
      parameters.push(category);
    }

    const rawResults = await this.productEntity.query(
      STATEMENTS.join(''),
      parameters,
    );

    const transformedResults: PostProductSearchResponseDto[] = rawResults.map(
      (row: any) => ({
        id: row.id,
        title: row.title,
        description: row.description,
        price: row.price,
        sold: row.sold,
        quantity: row.quantity,
        createdAt: row.product_created_at,
        updatedAt: row.product_updated_at,

        category: {
          id: row.category_id,
          name: row.category_name,
          createdAt: row.category_created_at,
          updatedAt: row.category_updated_at,
        },

        images: row.images && row.images[0] !== null ? row.images : [],
      }),
    );

    return transformedResults;
  }
}
