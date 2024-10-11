import { UserEntity } from '../entities';

export abstract class IUserRepository {
  abstract findOneUser(email: string, password: string): Promise<UserEntity>;
}
