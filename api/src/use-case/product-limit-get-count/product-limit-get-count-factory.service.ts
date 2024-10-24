import { Injectable } from '@nestjs/common';
import { isEmpty } from 'class-validator';

import { GetCountProductLimitResponseDto, ProductEntity } from 'src/core';

@Injectable()
export class ProductLimitGetCountFactoryService {
  constructResponse(productEntity: ProductEntity[]) {
    const date = productEntity.map((item) => {
      const {
        id,
        description,
        price,
        quantity,
        sold,
        title,
        createdAt,
        updatedAt,
        categoryId,
        images,
      } = item;

      const resp = new GetCountProductLimitResponseDto();
      resp.id = id;
      resp.title = title;
      resp.description = isEmpty(description) ? '' : description;
      resp.price = price;
      resp.quantity = quantity;
      resp.sold = sold;
      resp.createdAt = createdAt;
      resp.updatedAt = updatedAt;
      if (categoryId) {
        resp.categoryId = {
          id: categoryId.id,
          name: categoryId.name,
          createdAt: categoryId.createdAt,
          updatedAt: categoryId.updatedAt,
        };
      } else {
        resp.categoryId = null;
      }
      if (images && images.length > 0) {
        resp.images = images.map((image) => ({
          id: image.id,
          asset_id: image.asset_id,
          public_id: image.public_id,
          url: image.url,
          secure_url: image.secure_url,
          createdAt: image.createdAt,
          updatedAt: image.updatedAt,
        }));
      } else {
        resp.images = [];
      }

      return resp;
    });
    return date;
  }
}
