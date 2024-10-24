import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { UserCreateChangeRoleUseCase } from './user-create-change-role-use-case';
import { UserCreateChangeRoleFactoryService } from './user-create-change-role-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [UserCreateChangeRoleUseCase, UserCreateChangeRoleFactoryService],
  exports: [UserCreateChangeRoleUseCase, UserCreateChangeRoleFactoryService],
})
export class UserCreateChangeRoleUseCaseModule {}
