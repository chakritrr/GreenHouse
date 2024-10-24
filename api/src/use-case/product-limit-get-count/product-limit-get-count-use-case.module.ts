import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { ProductLimitGetCountUseCase } from './product-limit-get-count-use-case';
import { ProductLimitGetCountFactoryService } from './product-limit-get-count-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [ProductLimitGetCountUseCase, ProductLimitGetCountFactoryService],
  exports: [ProductLimitGetCountUseCase, ProductLimitGetCountFactoryService],
})
export class ProductLimitGetCountUseCaseModule {}
