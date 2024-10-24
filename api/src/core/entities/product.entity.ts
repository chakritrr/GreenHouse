import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import {
  CategoryEntity,
  ImageEntity,
  ProductOnCartEntity,
  ProductOnOrderEntity,
} from '.';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ default: 0 })
  sold: number;

  @Column()
  quantity: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(
    () => ProductOnOrderEntity,
    (productOnOrderEntity) => productOnOrderEntity.productId,
  )
  orderItems: ProductOnOrderEntity[];

  @OneToMany(
    () => ProductOnCartEntity,
    (productOnCartEntity) => productOnCartEntity.productId,
  )
  cartItems: ProductOnCartEntity[];

  @OneToMany(() => ImageEntity, (imageEntity) => imageEntity.productId)
  images: ImageEntity[];

  @ManyToOne(() => CategoryEntity, (categoryEntity) => categoryEntity.id, {
    nullable: true,
  })
  @JoinColumn({ name: 'categoryId' })
  categoryId: CategoryEntity;
}
