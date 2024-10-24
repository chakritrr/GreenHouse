import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { ProductCreateSearchUseCase } from './product-create-search-use-case';
import { ProductCreateSearchFactoryService } from './product-create-search-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductCreateSearchUseCase, ProductCreateSearchFactoryService],
  exports: [ProductCreateSearchUseCase, ProductCreateSearchFactoryService],
})
export class ProductCreateSearchUseCaseModule {}
