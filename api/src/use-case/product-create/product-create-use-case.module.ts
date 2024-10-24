import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { ProductCreateUseCase } from './product-create-use-case';
import { ProductCreateFactoryService } from './product-create-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductCreateUseCase, ProductCreateFactoryService],
  exports: [ProductCreateUseCase, ProductCreateFactoryService],
})
export class ProductCreateUseCaseModule {}
