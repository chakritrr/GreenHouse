import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ProductOnOrderEntity, UserEntity } from '.';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float' })
  cartTotal: number;

  @Column({ default: 'N' })
  orderStatus: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(
    () => ProductOnOrderEntity,
    (productOnOrderEntity) => productOnOrderEntity.id,
  )
  products: ProductOnOrderEntity[];

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.id)
  orderedById: UserEntity;
}
