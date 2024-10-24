import { Injectable } from '@nestjs/common';

import {
  PostChangStatusRequestDto,
  PostChangStatusResponseDto,
  UserEntity,
} from 'src/core';

@Injectable()
export class UserCreateChangeStatusFactoryService {
  createUserChangeStatus(
    postChangStatusRequestDto: PostChangStatusRequestDto,
    userById: UserEntity,
  ) {
    const { status } = postChangStatusRequestDto;

    userById.status = status;
    userById.updateAt = new Date();

    return userById;
  }

  constructResponse(id: string) {
    const resp = new PostChangStatusResponseDto();
    resp.id = id;

    return resp;
  }
}
