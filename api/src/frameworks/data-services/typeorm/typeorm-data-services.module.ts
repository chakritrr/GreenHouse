import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TYPE_ORM_CONFIG } from 'src/configulations';
import {
  CartEntity,
  CategoryEntity,
  ImageEntity,
  IUserRepository,
  OrderEntity,
  ProductEntity,
  ProductOnCartEntity,
  ProductOnOrderEntity,
  UserEntity,
} from 'src/core';
import { UserRepository } from 'src/repositories';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      ProductEntity,
      OrderEntity,
      ImageEntity,
      CategoryEntity,
      CartEntity,
      ProductOnCartEntity,
      ProductOnOrderEntity,
    ]),
    TYPE_ORM_CONFIG,
  ],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
  exports: [IUserRepository],
})
export class TypeOrmDataServicesModule {}
