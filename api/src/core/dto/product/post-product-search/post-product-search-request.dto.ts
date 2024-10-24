import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class PostProductSearchRequestDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  query: string;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  category: number[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  price: number[];
}
