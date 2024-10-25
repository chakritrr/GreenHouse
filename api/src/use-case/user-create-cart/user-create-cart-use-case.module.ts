import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { UserCreateCartUseCase } from './user-create-cart-use-case';
import { UserCreateCartFactoryService } from './user-create-cart-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [UserCreateCartUseCase, UserCreateCartFactoryService],
  exports: [UserCreateCartUseCase, UserCreateCartFactoryService],
})
export class UserCreateCartUseCaseModule {}
