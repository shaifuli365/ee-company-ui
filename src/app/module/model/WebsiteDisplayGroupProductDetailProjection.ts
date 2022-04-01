export class WebsiteDisplayGroupProductDetailProjection {

   wdgId : number;
   groupName : string;
   organizationId : number;
   wdgpId : string;
   pdId : number;
   seoTitle : string;
   seoUrl : string;
   basePrice : number;
   currentSalePrice : number;
   imageUrl : string;


  constructor(wdgId: number, groupName: string, organizationId: number, wdgpId: string,
              pdId: number, seoTitle: string, seoUrl: string, basePrice: number,
              currentSalePrice: number, imageUrl: string) {
    this.wdgId = wdgId;
    this.groupName = groupName;
    this.organizationId = organizationId;
    this.wdgpId = wdgpId;
    this.pdId = pdId;
    this.seoTitle = seoTitle;
    this.seoUrl = seoUrl;
    this.basePrice = basePrice;
    this.currentSalePrice = currentSalePrice;
    this.imageUrl = imageUrl;
  }
}
