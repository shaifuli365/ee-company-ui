import {CurrentPage} from '../../common/model/current-page';


export class ProductDetailSearchDto extends CurrentPage{

  brandSetupIdList : Array<number>;
  colorSetupIdList: Array<number>;

  minimumPrice:number;
  maximumPrice:number;

  organizationWebAddress:string;


  constructor(page: number, size: number, brandSetupIdList: Array<number>, colorSetupIdList: Array<number>,
              minimumPrice: number, maximumPrice: number, organizationWebAddress: string) {
    super(page, size);
    this.brandSetupIdList = brandSetupIdList;
    this.colorSetupIdList = colorSetupIdList;
    this.minimumPrice = minimumPrice;
    this.maximumPrice = maximumPrice;
    this.organizationWebAddress = organizationWebAddress;
  }
}
