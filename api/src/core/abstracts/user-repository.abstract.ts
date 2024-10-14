import { UserEntity } from '../entities';

export abstract class IUserRepository {
  abstract findOneUser(username: string, password: string): Promise<UserEntity>;

  abstract findOneUserByUsername(username: string): Promise<UserEntity>;
}
