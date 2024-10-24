import { IsNotEmpty, IsString } from 'class-validator';

export class PostChangeRoleRequestDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}
