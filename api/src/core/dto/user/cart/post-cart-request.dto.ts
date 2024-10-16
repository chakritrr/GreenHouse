import { IsNotEmpty, IsString } from 'class-validator';

export class PostCartRequestDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
