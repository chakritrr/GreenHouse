import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { CategoryDeleteUseCase } from './category-delete-use-case';
import { CategoryDeleteFactoryService } from './category-delete-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [CategoryDeleteUseCase, CategoryDeleteFactoryService],
  exports: [CategoryDeleteUseCase, CategoryDeleteFactoryService],
})
export class CategoryDeleteUseCaseModule {}
