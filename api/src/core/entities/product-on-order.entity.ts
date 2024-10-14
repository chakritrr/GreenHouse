import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { OrderEntity, ProductEntity } from '.';

@Entity({ name: 'product_on_order' })
export class ProductOnOrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  count: number;

  @Column({ type: 'float' })
  price: number;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.id)
  productId: ProductEntity;

  @ManyToOne(() => OrderEntity, (orderEntity) => orderEntity.id)
  orderId: OrderEntity;
}
