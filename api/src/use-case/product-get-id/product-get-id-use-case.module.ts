import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { ProductGetByIdUseCase } from './product-get-id-use-case';
import { ProductGetByIdFactoryService } from './product-get-id-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductGetByIdUseCase, ProductGetByIdFactoryService],
  exports: [ProductGetByIdUseCase, ProductGetByIdFactoryService],
})
export class ProductGetByIdUseCaseModule {}
