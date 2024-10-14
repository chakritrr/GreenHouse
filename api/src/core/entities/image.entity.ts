import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ProductEntity } from './product.entity';

@Entity({ name: 'image' })
export class ImageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  asset_id: string;

  @Column()
  public_id: string;

  @Column()
  url: string;

  @Column()
  secure_url: string;

  @ManyToOne(() => ProductEntity, (productEntity) => productEntity.id)
  productId: ProductEntity;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
