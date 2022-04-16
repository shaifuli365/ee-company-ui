export class ProductGroupDto {
  id:number|null;
  name:string|null;
  productInserted:boolean|null;
  productGroupChildList:Array<ProductGroupDto>|null;

  constructor(id: number | null, name: string | null, productInserted: boolean | null,
              productGroupChildList: Array<ProductGroupDto> | null) {
    this.id = id;
    this.name = name;
    this.productInserted = productInserted;
    this.productGroupChildList = productGroupChildList;
  }
}
