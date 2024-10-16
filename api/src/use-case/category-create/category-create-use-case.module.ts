import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { CategoryCreateUseCase } from './category-create-use-case';
import { CategoryCreateFactoryService } from './category-create-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [CategoryCreateUseCase, CategoryCreateFactoryService],
  exports: [CategoryCreateUseCase, CategoryCreateFactoryService],
})
export class CategoryCreateUseCaseModule {}
