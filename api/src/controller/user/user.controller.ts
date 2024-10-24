import { Controller, Delete, Get, Post } from '@nestjs/common';

import { UserGetAllUseCase } from 'src/use-case/user-get-all/user-get-all-use-case';

@Controller()
export class UserController {
  constructor(private readonly userGetAllUseCase: UserGetAllUseCase) {}

  @Get('/v1/users')
  getAllUser() {
    return this.userGetAllUseCase.getAllUser();
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
