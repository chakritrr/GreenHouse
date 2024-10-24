import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { UserGetAllUseCase } from './user-get-all-use-case';
import { UserGetAllFactoryService } from './user-get-all-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [UserGetAllUseCase, UserGetAllFactoryService],
  exports: [UserGetAllUseCase, UserGetAllFactoryService],
})
export class UserGetAllUseCaseModule {}
