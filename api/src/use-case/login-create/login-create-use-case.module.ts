import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { LoginCreateFactoryService } from './login-create-factory.service';
import { LoginCreateUseCase } from './login-create-use-case';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    DataServicesModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '300s' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [LoginCreateUseCase, LoginCreateFactoryService],
  exports: [LoginCreateUseCase, LoginCreateFactoryService],
})
export class LoginCreateUseCaseModule {}
