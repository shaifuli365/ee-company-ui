import {CurrentPage} from '../../common/model/current-page';


export class SingleProductSearchDto {


  organizationWebAddress:string;
  productDetailSeoUrl:string;


  constructor( organizationWebAddress: string, productDetailSeoUrl: string) {

    this.organizationWebAddress = organizationWebAddress;
    this.productDetailSeoUrl = productDetailSeoUrl;
  }
}
