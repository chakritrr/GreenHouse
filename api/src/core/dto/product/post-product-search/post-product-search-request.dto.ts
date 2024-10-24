import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class PostProductSearchRequestDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  query: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  category: string[];

  @ApiProperty()
  @IsString()
  @IsOptional()
  price: string[];
}
