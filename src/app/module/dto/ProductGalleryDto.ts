import {ProductDto} from './ProductDto';
import {ProductDetailDto} from './ProductDetailDto';

export class ProductGalleryDto {

  id: number|null = null;
  imageTitle: string|null = null;
  imageUrl: string|null = null;

  product: ProductDto|null = null;
  productId: number|null = null;

  productDetail: ProductDetailDto|null = null;
  productDetailId: number|null = null;

  constructor(id: number | null, imageTitle: string | null, imageUrl: string | null,
              product: ProductDto | null, productId: number | null, productDetail: ProductDetailDto | null,
              productDetailId: number | null) {
    this.id = id;
    this.imageTitle = imageTitle;
    this.imageUrl = imageUrl;
    this.product = product;
    this.productId = productId;
    this.productDetail = productDetail;
    this.productDetailId = productDetailId;
  }

}
