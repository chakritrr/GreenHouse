import { IsNotEmpty, IsString } from 'class-validator';

export class PostChangRoleRequestDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}
