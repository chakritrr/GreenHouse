import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import {
  CategoryController,
  LoginController,
  RegisterController,
} from './controller';
import { DataServicesModule } from './frameworks/data-services/data-services.module';
import { CategoryCreateUseCaseModule } from './use-case/category-create/category-create-use-case.module';
import { LoginCreateUseCaseModule } from './use-case/login-create/login-create-use-case.module';
import { RegisterCreateUseCaseModule } from './use-case/register-create/register-create-use-case.module';
import { CategoryGetAllUseCaseModule } from './use-case/category-get-all/category-get-all-use-case.module';
import { CategoryDeleteUseCaseModule } from './use-case/category-delete/category-delete-use-case.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    DataServicesModule,
    RegisterCreateUseCaseModule,
    LoginCreateUseCaseModule,
    CategoryCreateUseCaseModule,
    CategoryGetAllUseCaseModule,
    CategoryDeleteUseCaseModule,
  ],
  controllers: [RegisterController, LoginController, CategoryController],
})
export class AppModule {}
