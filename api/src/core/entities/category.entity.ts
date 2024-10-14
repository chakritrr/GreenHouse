import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ProductEntity } from '.';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => ProductEntity, (productEntity) => productEntity.categoryId)
  products: ProductEntity[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
