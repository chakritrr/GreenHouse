import { Injectable } from '@nestjs/common';
import { isEmpty } from 'class-validator';

import { GetIdProductResponseDto, ProductEntity } from 'src/core';

@Injectable()
export class ProductGetByIdFactoryService {
  constructResponse(productEntity: ProductEntity) {
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
    } = productEntity;

    const resp = new GetIdProductResponseDto();
    resp.id = id;
    resp.title = title;
    resp.description = isEmpty(description) ? '' : description;
    resp.price = price;
    resp.quantity = quantity;
    resp.sold = sold;
    resp.createdAt = createdAt;
    resp.updatedAt = updatedAt;
    resp.categoryId = {
      id: categoryId.id,
      name: categoryId.name,
      createdAt: categoryId.createdAt,
      updatedAt: categoryId.updatedAt,
    };
    resp.images = images.map((image) => ({
      id: image.id,
      asset_id: image.asset_id,
      public_id: image.public_id,
      url: image.url,
      secure_url: image.secure_url,
      createdAt: image.createdAt,
      updatedAt: image.updatedAt,
    }));

    return resp;
  }
}
