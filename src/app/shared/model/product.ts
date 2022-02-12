import {ProductDetailDto} from './product-detail';
import {UnitSetupDto} from './unit-setup';
import {ProductGalleryDto} from './product-gallery';

export class ProductDto {
  id: number = null;
  name: string = null;
  description: string = null;
  specification: string = null;
  sku: string = null;
  tags: string = null;
  productDetailDtoList: ProductDetailDto[] = null;
  productGalleryDtoList: ProductGalleryDto[] = null;
  unitSetupDtoList: UnitSetupDto[] = null;
  unitSetupId: number = null;

  constructor(){

  }

}



