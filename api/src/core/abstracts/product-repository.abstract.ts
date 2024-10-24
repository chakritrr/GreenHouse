import { ProductEntity } from '../entities';
import { PostProductSearchRequestDto, PostProductSearchResponseDto, PostProductSortRequestDto } from '../dto';

export abstract class IProductRepository {
  abstract findOneById(id: string): Promise<ProductEntity>;

  abstract findProductLimit(count: number): Promise<ProductEntity[]>;

  abstract findProductBySort(postProductSortRequestDto: PostProductSortRequestDto): Promise<ProductEntity[]>;

  abstract findProductSearchFilter(postProductSearchRequestDto: PostProductSearchRequestDto): Promise<PostProductSearchResponseDto[]>;
}
