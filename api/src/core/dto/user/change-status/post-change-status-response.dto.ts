import { ApiProperty } from '@nestjs/swagger';

export class PostChangStatusResponseDto {
  @ApiProperty()
  id: string;
}
