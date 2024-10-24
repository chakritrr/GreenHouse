import { ApiProperty } from '@nestjs/swagger';

export class PatchProductResponseDto {
  @ApiProperty()
  id: string;
}
