import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { CategoryGetAllUseCase } from './category-get-all-use-case';
import { CategoryGetAllFactoryService } from './category-get-all-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [CategoryGetAllUseCase, CategoryGetAllFactoryService],
  exports: [CategoryGetAllUseCase, CategoryGetAllFactoryService],
})
export class CategoryGetAllUseCaseModule {}
