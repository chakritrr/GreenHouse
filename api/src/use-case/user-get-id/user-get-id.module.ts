import { Module } from '@nestjs/common';

import { DataServicesModule } from 'src/frameworks/data-services/data-services.module';
import { UserGetIdService } from './user-get-id.service';

@Module({
  imports: [DataServicesModule],
  providers: [UserGetIdService],
  exports: [UserGetIdService],
})
export class UserGetIdServiceModule {}
