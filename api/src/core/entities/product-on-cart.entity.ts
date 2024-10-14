import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { CartEntity, ProductEntity } from '.';

@Entity({ name: 'product_on_cart' })
export class ProductOnCartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CartEntity, (cartEntity) => cartEntity.id)
  cartId: CartEntity;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.id)
  productId: ProductEntity;

  @Column()
  count: number;

  @Column({ type: 'float' })
  price: number;
}
