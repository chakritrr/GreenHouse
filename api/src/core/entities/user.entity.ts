import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { CartEntity, OrderEntity } from '.';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updateAt: Date;

  @Column({ nullable: true })
  picture: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ default: 'Y' })
  status: string;

  @OneToMany(() => OrderEntity, (orderEntity) => orderEntity.orderedById)
  orders: OrderEntity[];

  @OneToMany(() => CartEntity, (cartEntity) => cartEntity.orderedById)
  carts: CartEntity[];
}
