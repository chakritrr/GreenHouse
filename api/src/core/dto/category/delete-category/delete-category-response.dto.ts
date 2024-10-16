import { ApiProperty } from '@nestjs/swagger';

export class DeleteCategoryResponseDto {
  @ApiProperty()
  id: string;
}
