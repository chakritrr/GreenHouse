import { Injectable } from '@nestjs/common';
import { isEmpty } from 'class-validator';

import {
  CategoryEntity,
  ImageEntity,
  PostProductRequestDto,
  PostProductResponseDto,
  ProductEntity,
} from 'src/core';

@Injectable()
export class ProductCreateFactoryService {
  createProduct(
    postProductRequestDto: PostProductRequestDto,
    categoryEntity: CategoryEntity,
  ) {
    const { title, description, price, quantity, images } = postProductRequestDto;

    const productEntity = new ProductEntity();
    productEntity.title = title;
    productEntity.description = description;
    productEntity.price = price;
    productEntity.quantity = quantity;
    productEntity.categoryId = categoryEntity;
    productEntity.createdAt = new Date();
    productEntity.updatedAt = new Date();

    if (!isEmpty(images)) {
      productEntity.images = images.map((item) => {
        const imageEntity = new ImageEntity();
        imageEntity.asset_id = item.asset_id;
        imageEntity.public_id = item.public_id;
        imageEntity.url = item.url;
        imageEntity.secure_url = item.secure_url;
        imageEntity.createdAt = new Date();
        imageEntity.updatedAt = new Date();
        return imageEntity;
      });
    } else {
      productEntity.images = []
    }

    return productEntity;
  }
  constructResponse(id: string) {
    const resp = new PostProductResponseDto();
    resp.id = id;
    return resp;
  }
}
