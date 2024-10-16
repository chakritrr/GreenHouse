import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller()
export class UserController {
  constructor() {}

  @Get('/v1/users')
  getAllData() {
    return '';
  }
  @Post('/v1/change-status')
  createChangStatus() {
    return;
  }
  @Post('/v1/change-role')
  createChangRole() {
    return;
  }

  @Post('/v1/user/cart')
  createUserCart() {
    return '';
  }
  @Get('/v1/user/cart')
  getUserCart() {
    return;
  }
  @Delete('/v1/user/cart')
  deleteUserCart() {
    return;
  }

  @Post('/v1/user/address')
  createUserAddress() {
    return;
  }

  @Post('/v1/user/order')
  createUserOrder() {
    return;
  }
  @Get('/v1/user/order')
  getUserOrder() {
    return;
  }
}
