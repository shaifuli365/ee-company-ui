import {ProductDto} from './ProductDto';
import {OrganizationDto} from './OrganizationDto';

export class ProductDetailDto {
  id: number|null = null;
  seoTitle: string|null = null;
  seoUrl: string|null = null;
  size: string|null = null;
  model: string|null = null;
  barCode: string|null = null;
  basePrice: string|null = null;
  currentSalePrice: string|null = null;
  subSku: string|null = null;
  captionTitle: string|null = null;
  captionBgColor: string|null = null;
  year: number|null = null;
  productWeightInGram: number|null = null;
  productMaterial: string|null = null;
  availableStock: number|null = null;
  imageRootPath: string|null = null;
  imageRelativePath: string|null = null;
  imageNameWithExt: string|null = null;
  product: ProductDto[];
  productId: number|null = null;
  organization: OrganizationDto[]|null = null;
  organizationId: number|null = null;
  brandSetup: number|null = null;
  brandSetupId: number|null = null;
  colorSetup: number|null = null;
  colorSetupId: number|null = null;


  constructor(id: number, seoTitle: string, seoUrl: string, size: string, model: string,
              barCode: string, basePrice: string, currentSalePrice: string, subSku: string,
              captionTitle: string, captionBgColor: string, year: number, productWeightInGram: number,
              productMaterial: string, availableStock: number, imageRootPath: string,
              imageRelativePath: string, imageNameWithExt: string, product: ProductDto[],
              productId: number, organization: OrganizationDto[], organizationId: number,
              brandSetup: number, brandSetupId: number, colorSetup: number, colorSetupId: number) {
    this.id = id;
    this.seoTitle = seoTitle;
    this.seoUrl = seoUrl;
    this.size = size;
    this.model = model;
    this.barCode = barCode;
    this.basePrice = basePrice;
    this.currentSalePrice = currentSalePrice;
    this.subSku = subSku;
    this.captionTitle = captionTitle;
    this.captionBgColor = captionBgColor;
    this.year = year;
    this.productWeightInGram = productWeightInGram;
    this.productMaterial = productMaterial;
    this.availableStock = availableStock;
    this.imageRootPath = imageRootPath;
    this.imageRelativePath = imageRelativePath;
    this.imageNameWithExt = imageNameWithExt;
    this.product = product;
    this.productId = productId;
    this.organization = organization;
    this.organizationId = organizationId;
    this.brandSetup = brandSetup;
    this.brandSetupId = brandSetupId;
    this.colorSetup = colorSetup;
    this.colorSetupId = colorSetupId;
  }
}
