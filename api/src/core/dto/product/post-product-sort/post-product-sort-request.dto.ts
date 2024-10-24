import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostProductSortRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sort: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  order: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  limit: number;
}
