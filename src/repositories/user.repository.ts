import { Injectable } from '@nestjs/common';

import { IUserRepository } from 'src/core';

@Injectable()
export class UserRepository implements IUserRepository {}
