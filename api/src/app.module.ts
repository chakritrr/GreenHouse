import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller';
import { DataServicesModule } from './frameworks/data-services/data-services.module';
import { UserGetIdServiceModule } from './service/user-get-id/user-get-id.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    DataServicesModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserGetIdServiceModule],
})
export class AppModule {}
