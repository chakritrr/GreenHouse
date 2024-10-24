import { ApiProperty } from '@nestjs/swagger';

export class PostProductResponseDto {
  @ApiProperty()
  id: string;
}
