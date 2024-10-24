import { ApiProperty } from '@nestjs/swagger';

class CategoryResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

class ImageResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  asset_id: string;

  @ApiProperty()
  public_id: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  secure_url: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class GetIdProductResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  sold: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: CategoryResponseDto })
  categoryId: CategoryResponseDto;

  @ApiProperty({ type: [ImageResponseDto] })
  images: ImageResponseDto[];
}
