import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostUserCartRequestDto {
  @IsArray()
  @IsNotEmpty()
  cart: UserCartRequsetDto[];
}

class UserCartRequsetDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  price: string;

  @IsNumber()
  @IsNotEmpty()
  count: string;
}
