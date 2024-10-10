import { Module } from '@nestjs/common';

import { UserGetIdService } from './user-get-id.service';
import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [UserGetIdService],
  exports: [UserGetIdService],
})
export class UserGetIdServiceModule {}
