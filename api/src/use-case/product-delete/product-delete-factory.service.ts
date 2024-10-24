import { Injectable } from '@nestjs/common';

import { DeleteProductResponseDto } from 'src/core';

@Injectable()
export class ProductDeleteFactoryService {
  constructResponse(id: string) {
    const resp = new DeleteProductResponseDto();
    resp.id = id;

    return resp;
  }
}
