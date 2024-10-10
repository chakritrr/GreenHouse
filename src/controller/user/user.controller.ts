import { Controller, Get } from '@nestjs/common';

import { AppService } from 'src/app.service';

@Controller()
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get('/v1/user')
  getAllData() {
    console.log('success');
    return this.appService.getHello();
  }
}
