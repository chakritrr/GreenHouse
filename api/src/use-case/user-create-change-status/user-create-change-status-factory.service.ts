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
    userEntity: UserEntity,
  ) {
    const { status } = postChangStatusRequestDto;

    userEntity.status = status;
    userEntity.updateAt = new Date();

    return userEntity;
  }

  constructResponse(id: string) {
    const resp = new PostChangStatusResponseDto();
    resp.id = id;

    return resp;
  }
}
