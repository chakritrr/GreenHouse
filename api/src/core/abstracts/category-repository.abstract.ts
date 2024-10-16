import { CategoryEntity } from '../entities';

export abstract class ICategoryRepository {
  abstract findAll(): Promise<CategoryEntity[]>;

  abstract findOneCategory(id: string): Promise<CategoryEntity>;

  abstract findOneById(id: string): Promise<CategoryEntity>;
}
