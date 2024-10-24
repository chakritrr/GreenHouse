import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { ProductUpdateUseCase } from './product-update-use-case';
import { ProductUpdateFactoryService } from './product-update-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductUpdateUseCase, ProductUpdateFactoryService],
  exports: [ProductUpdateUseCase, ProductUpdateFactoryService],
})
export class ProductUpdateUseCaseModule {}
