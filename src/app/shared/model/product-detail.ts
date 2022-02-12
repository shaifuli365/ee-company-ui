import {OrganizationDto} from './organization';
import {ProductDto} from './product';

export class ProductDetailDto {
  id: number = null;
  seoTitle: string = null;
  seoUrl: string = null;
  size: string = null;
  model: string = null;
  barCode: string = null;
  basePrice: string = null;
  currentSalePrice: string = null;
  subSku: string = null;
  captionTitle: string = null;
  captionBgColor: string = null;
  year: number = null;
  productWeightInGram: number = null;
  productMaterial: string = null;
  availableStock: number = null;
  imageRootPath: string = null;
  imageRelativePath: string = null;
  imageNameWithExt: string = null;
  product: ProductDto[];
  productId: number;
  organization: OrganizationDto[];
  organizationId: number;
  brandSetup: number;
  brandSetupId: number;
  colorSetup: number;
  colorSetupId: number;

}
