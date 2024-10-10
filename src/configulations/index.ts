import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TYPE_ORM_CONFIG = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (cs: ConfigService) =>
    ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      entities: ['dist/core/entities/*.entity.js'],
    }) as TypeOrmModuleOptions,
});
