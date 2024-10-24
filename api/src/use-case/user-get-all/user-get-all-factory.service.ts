import { Injectable } from '@nestjs/common';
import { GetAllUserResponseDto, UserEntity } from 'src/core';

@Injectable()
export class UserGetAllFactoryService {
  constructResponse(userEntity: UserEntity[]) {
    const resp = userEntity.map((item) => {
      const userResDto = new GetAllUserResponseDto();
      userResDto.id = item.id;
      userResDto.email = item.email;
      userResDto.role = item.role;
      userResDto.status = item.status;

      return userResDto;
    });

    return resp;
  }
}
