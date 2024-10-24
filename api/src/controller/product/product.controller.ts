import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import {
  PatchProductRequestDto,
  PostProductRequestDto,
  PostProductSearchRequestDto,
  PostProductSortRequestDto,
} from 'src/core';
import { JwtAuthGuard } from 'src/frameworks/guards/jwt.auth.guard';
import { ProductCreateSearchUseCase } from 'src/use-case/product-create-search/product-create-search-use-case';
import { ProductCreateSortUseCase } from 'src/use-case/product-create-sort/product-create-sort-use-case';
import { ProductCreateUseCase } from 'src/use-case/product-create/product-create-use-case';
import { ProductDeleteUseCase } from 'src/use-case/product-delete/product-delete-use-case';
import { ProductGetByIdUseCase } from 'src/use-case/product-get-id/product-get-id-use-case';
import { ProductLimitGetCountUseCase } from 'src/use-case/product-limit-get-count/product-limit-get-count-use-case';
import { ProductUpdateUseCase } from 'src/use-case/product-update/product-update-use-case';

@UseGuards(JwtAuthGuard)
@Controller()
export class ProductController {
  constructor(
    private readonly productCreateUseCase: ProductCreateUseCase,
    private readonly productGetByIdUseCase: ProductGetByIdUseCase,
    private readonly productLimitGetCountUseCase: ProductLimitGetCountUseCase,
    private readonly productUpdateUseCase: ProductUpdateUseCase,
    private readonly productDeleteUseCase: ProductDeleteUseCase,
    private readonly productCreateSortUseCase: ProductCreateSortUseCase,
    private readonly productCreateSearchUseCase: ProductCreateSearchUseCase,
  ) {}

  @Post('/v1/product')
  createProduct(@Body() postProductRequestDto: PostProductRequestDto) {
    return this.productCreateUseCase.createProduct(postProductRequestDto);
  }

  @Get('/v1/product/limit/:count')
  getProductLimitByCount(@Param('count') count: number) {
    return this.productLimitGetCountUseCase.getProductLimitByCount(count);
  }

  @Get('/v1/product/:id')
  getProductById(@Param('id') id: string) {
    return this.productGetByIdUseCase.getProductById(id);
  }

  @Patch('/v1/product/:id')
  patchProductById(
    @Param('id') id: string,
    @Body() patchProductRequestDto: PatchProductRequestDto,
  ) {
    return this.productUpdateUseCase.updateProductById(
      id,
      patchProductRequestDto,
    );
  }

  @Delete('/v1/product/:id')
  deleteProductById(@Param('id') productId: string) {
    return this.productDeleteUseCase.deleteProduct(productId);
  }

  @Post('/v1/productby')
  createProductBy(
    @Body() postProductSortRequestDto: PostProductSortRequestDto,
  ) {
    return this.productCreateSortUseCase.createProductSort(
      postProductSortRequestDto,
    );
  }

  @Post('/v1/product/search')
  createProductSearch(
    @Body() postProductSearchRequestDto: PostProductSearchRequestDto,
  ) {
    return this.productCreateSearchUseCase.createProductSearch(
      postProductSearchRequestDto,
    );
  }
}
