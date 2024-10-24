import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PatchProductRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  categoryId: string

  @ApiProperty()
  @IsArray()
  @IsOptional()
  images: PatchProductImageDto[];
}

class PatchProductImageDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  asset_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public_id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  secure_url: string;
}
