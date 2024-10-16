import { IsNotEmpty, IsString } from 'class-validator';

export class PostCategoryRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
