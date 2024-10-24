import { ApiProperty } from '@nestjs/swagger';

export class DeleteProductResponseDto {
  @ApiProperty()
  id: string;
}
