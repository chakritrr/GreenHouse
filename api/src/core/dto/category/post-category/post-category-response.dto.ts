import { ApiProperty } from '@nestjs/swagger';

export class PostCategoryResponseDto {
  @ApiProperty()
  id: string;
}
