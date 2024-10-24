import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { ProductDeleteUseCase } from './product-delete-use-case';
import { ProductDeleteFactoryService } from './product-delete-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductDeleteUseCase, ProductDeleteFactoryService],
  exports: [ProductDeleteUseCase, ProductDeleteFactoryService],
})
export class ProductDeleteUseCaseModule {}
