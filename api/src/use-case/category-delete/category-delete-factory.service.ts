import { Injectable } from '@nestjs/common';

import { DeleteCategoryResponseDto } from 'src/core';

@Injectable()
export class CategoryDeleteFactoryService {
  constructResponse(id: string) {
    const resp = new DeleteCategoryResponseDto();
    resp.id = id;

    return resp;
  }
}
