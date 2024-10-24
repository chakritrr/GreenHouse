import { Injectable } from '@nestjs/common';

import {
  PostChangeRoleRequestDto,
  PostChangeRoleResponseDto,
  UserEntity,
} from 'src/core';

@Injectable()
export class UserCreateChangeRoleFactoryService {
  createUserChangeRole(
    postChangRoleRequestDto: PostChangeRoleRequestDto,
    userEntity: UserEntity,
  ) {
    const { role } = postChangRoleRequestDto;

    userEntity.role = role;
    userEntity.updateAt = new Date();

    return userEntity;
  }

  constructResponse(id: string) {
    const resp = new PostChangeRoleResponseDto();
    resp.id = id;

    return resp;
  }
}
