import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  constructor() {}

  @Get('/v1/user')
  getAllData() {
    return '';
  }

  @Get('/v1/user/:id')
  getUserId() {
    return '';
  }
}
