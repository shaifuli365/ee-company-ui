import {ProductDto} from './ProductDto';
import {OrganizationDto} from './OrganizationDto';
import {BrandSetupDto} from './BrandSetupDto';
import {ColorSetupDto} from './ColorSetupDto';
import {ProductGalleryDto} from './ProductGalleryDto';

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

  product: ProductDto;
  productId: number|null = null;

  organization: OrganizationDto|null = null;
  organizationId: number|null = null;

  brandSetup: BrandSetupDto|null = null;
  brandSetupId: number|null = null;

  colorSetup: ColorSetupDto|null = null;
  colorSetupId: number|null = null;

  productGalleryList:ProductGalleryDto[] ;


  constructor(id: number | null, seoTitle: string | null, seoUrl: string | null, size: string | null,
              model: string | null, barCode: string | null, basePrice: string | null, currentSalePrice: string | null,
              subSku: string | null, captionTitle: string | null, captionBgColor: string | null, year: number | null,
              productWeightInGram: number | null, productMaterial: string | null, availableStock: number | null,
              product: ProductDto, productId: number | null, organization: OrganizationDto | null,
              organizationId: number | null, brandSetup: BrandSetupDto | null, brandSetupId: number | null,
              colorSetup: ColorSetupDto | null, colorSetupId: number | null, productGalleryList: ProductGalleryDto[]) {
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
    this.product = product;
    this.productId = productId;
    this.organization = organization;
    this.organizationId = organizationId;
    this.brandSetup = brandSetup;
    this.brandSetupId = brandSetupId;
    this.colorSetup = colorSetup;
    this.colorSetupId = colorSetupId;
    this.productGalleryList = productGalleryList;
  }
}
