import { ApiProperty } from '@nestjs/swagger';

export class GetUsersResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  status: string;
}
