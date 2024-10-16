import { IsNotEmpty, IsString } from 'class-validator';

export class PostChangStatusRequestDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
