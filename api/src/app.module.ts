import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  CategoryController,
  LoginController,
  ProductController,
  RegisterController,
  UserController,
} from './controller';
import { DataServicesModule } from './frameworks/data-services/data-services.module';
import { CategoryCreateUseCaseModule } from './use-case/category-create/category-create-use-case.module';
import { LoginCreateUseCaseModule } from './use-case/login-create/login-create-use-case.module';
import { RegisterCreateUseCaseModule } from './use-case/register-create/register-create-use-case.module';
import { CategoryGetAllUseCaseModule } from './use-case/category-get-all/category-get-all-use-case.module';
import { CategoryDeleteUseCaseModule } from './use-case/category-delete/category-delete-use-case.module';
import { ProductCreateUseCaseModule } from './use-case/product-create/product-create-use-case.module';
import { ProductGetByIdUseCaseModule } from './use-case/product-get-id/product-get-id-use-case.module';
import { ProductDeleteUseCaseModule } from './use-case/product-delete/product-delete-use-case.module';
import { ProductUpdateUseCaseModule } from './use-case/product-update/product-update-use-case.module';
import { ProductLimitGetCountUseCaseModule } from './use-case/product-limit-get-count/product-limit-get-count-use-case.module';
import { ProductCreateSortUseCaseModule } from './use-case/product-create-sort/product-create-sort-use-case.module';
import { ProductCreateSearchUseCaseModule } from './use-case/product-create-search/product-create-search-use-case.module';
import { UserGetAllUseCaseModule } from './use-case/user-get-all/user-get-all-use-case.module';
import { UserCreateChangeStatusUseCaseModule } from './use-case/user-create-change-status/user-create-change-status-use-case.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    DataServicesModule,
    RegisterCreateUseCaseModule,
    LoginCreateUseCaseModule,
    CategoryCreateUseCaseModule,
    CategoryGetAllUseCaseModule,
    CategoryDeleteUseCaseModule,
    ProductCreateUseCaseModule,
    ProductGetByIdUseCaseModule,
    ProductDeleteUseCaseModule,
    ProductUpdateUseCaseModule,
    ProductLimitGetCountUseCaseModule,
    ProductCreateSortUseCaseModule,
    ProductCreateSearchUseCaseModule,
    UserGetAllUseCaseModule,
    UserCreateChangeStatusUseCaseModule,
  ],
  controllers: [
    RegisterController,
    LoginController,
    CategoryController,
    ProductController,
    UserController,
  ],
})
export class AppModule {}
