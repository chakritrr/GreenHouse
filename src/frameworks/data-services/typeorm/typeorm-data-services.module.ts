import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TYPE_ORM_CONFIG } from 'src/configulations';
import { IUserRepository, UserEntity } from 'src/core';
import { UserRepository } from 'src/repositories';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), TYPE_ORM_CONFIG],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
  exports: [IUserRepository],
})
export class TypeOrmDataServicesModule {}
