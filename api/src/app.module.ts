import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LoginController } from './controller/login/login.controller';
import { DataServicesModule } from './frameworks/data-services/data-services.module';
import { LoginCreateUseCaseModule } from './use-case/login-create/login-create-use-case.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    DataServicesModule,
    LoginCreateUseCaseModule,
  ],
  controllers: [LoginController],
})
export class AppModule {}
