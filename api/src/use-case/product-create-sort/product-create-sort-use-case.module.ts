import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { ProductCreateSortUseCase } from './product-create-sort-use-case';
import { ProductCreateSortFactoryService } from './product-create-sort-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductCreateSortUseCase, ProductCreateSortFactoryService],
  exports: [ProductCreateSortUseCase, ProductCreateSortFactoryService],
})
export class ProductCreateSortUseCaseModule {}
