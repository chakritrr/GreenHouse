import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { UserCreateChangeStatusUseCase } from './user-create-change-status-use-case';
import { UserCreateChangeStatusFactoryService } from './user-create-change-status-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [
    UserCreateChangeStatusUseCase,
    UserCreateChangeStatusFactoryService,
  ],
  exports: [
    UserCreateChangeStatusUseCase,
    UserCreateChangeStatusFactoryService,
  ],
})
export class UserCreateChangeStatusUseCaseModule {}
