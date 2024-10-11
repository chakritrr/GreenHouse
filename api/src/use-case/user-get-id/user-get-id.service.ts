import { Injectable } from '@nestjs/common';

@Injectable()
export class UserGetIdService {
  getHello(): string {
    return 'Hello World!';
  }
}
