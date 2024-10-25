import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCreateCartFactoryService {
  constructResponse(id: string) {
    return id;
  }
}
