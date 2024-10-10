import { Controller, Get } from '@nestjs/common';

import { AppService } from 'src/app.service';

@Controller()
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get('/v1/user')
  getAllData() {
    return this.appService.getHello();
  }

  @Get('/v1/user/:id')
  getUserId() {
    return this.appService.getHello();
  }
}
