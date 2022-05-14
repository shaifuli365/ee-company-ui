
import {ProductGalleryDto} from './ProductGalleryDto';
import {ProductDetailDto} from './ProductDetailDto';
import {UnitSetupDto} from './UnitSetup';


export class ProductDto {
  id: number|null = null;
  name: string|null = null;
  description: string|null = null;
  specification: string|null = null;
  sku: string|null = null;
  tags: string|null = null;
  productDetailList: ProductDetailDto[]|null = null;
  productGalleryDtoList: ProductGalleryDto[]|null = null;
  unitSetupDtoList: UnitSetupDto[]|null = null;
  unitSetupId: number|null = null;


  constructor(id: number | null, name: string | null, description: string | null, specification: string | null,
              sku: string | null, tags: string | null, productDetailList: ProductDetailDto[] | null,
              productGalleryDtoList: ProductGalleryDto[] | null, unitSetupDtoList: UnitSetupDto[] | null,
              unitSetupId: number | null) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.specification = specification;
    this.sku = sku;
    this.tags = tags;
    this.productDetailList = productDetailList;
    this.productGalleryDtoList = productGalleryDtoList;
    this.unitSetupDtoList = unitSetupDtoList;
    this.unitSetupId = unitSetupId;
  }
}



