import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import {
  PostChangeRoleRequestDto,
  PostChangStatusRequestDto,
  PostUserCartRequestDto,
} from 'src/core';
import { JwtAuthGuard } from 'src/frameworks/guards/jwt.auth.guard';
import { UserCreateCartUseCase } from 'src/use-case/user-create-cart/user-create-cart-use-case';
import { UserCreateChangeRoleUseCase } from 'src/use-case/user-create-change-role/user-create-change-role-use-case';
import { UserCreateChangeStatusUseCase } from 'src/use-case/user-create-change-status/user-create-change-status-use-case';
import { UserGetAllUseCase } from 'src/use-case/user-get-all/user-get-all-use-case';

@UseGuards(JwtAuthGuard)
@Controller()
export class UserController {
  constructor(
    private readonly userGetAllUseCase: UserGetAllUseCase,
    private readonly userCreateChangeStatusUseCase: UserCreateChangeStatusUseCase,
    private readonly userCreateChangeRoleUseCase: UserCreateChangeRoleUseCase,
    private readonly userCreateCartUseCase: UserCreateCartUseCase,
  ) {}

  @Get('/v1/users')
  getAllUser() {
    return this.userGetAllUseCase.getAllUser();
  }

  @Post('/v1/change-status')
  createChangStatus(
    @Body() postChangStatusRequestDto: PostChangStatusRequestDto,
  ) {
    return this.userCreateChangeStatusUseCase.createUserChangeStatus(
      postChangStatusRequestDto,
    );
  }

  @Post('/v1/change-role')
  createChangRole(@Body() postChangRoleRequestDto: PostChangeRoleRequestDto) {
    return this.userCreateChangeRoleUseCase.createUserChangeRole(
      postChangRoleRequestDto,
    );
  }

  @Post('/v1/user/cart')
  createUserCart(
    @Request() req,
    @Body() postUserCartRequestDto: PostUserCartRequestDto,
  ) {
    const userId = req.user.userId;

    return this.userCreateCartUseCase.createUserCart(
      userId,
      postUserCartRequestDto,
    );
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
