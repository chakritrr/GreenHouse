import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ProductOnCartEntity, UserEntity } from '.';

@Entity({ name: 'cart' })
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float' })
  cartTotal: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.id)
  orderedById: UserEntity;
 
  @OneToMany(
    () => ProductOnCartEntity,
    (productOnCartEntity) => productOnCartEntity.cartId,
  )
  products: ProductOnCartEntity[];
}
