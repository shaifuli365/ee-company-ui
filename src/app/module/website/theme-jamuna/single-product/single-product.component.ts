import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {WebsiteSingleProductService} from '../../service/website-single-product.service';
import {ResponseMessage} from '../../../model/ResponseMessage';
import {HttpResponse} from '@angular/common/http';
import {SingleProductSearchDto} from '../../../dto/SingleProductSearchDto';
import {ProductDto} from '../../../dto/ProductDto';
import {ProductDetailDto} from '../../../dto/ProductDetailDto';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  max = 5;
  rate = 10;
  rate2 = 3;
  isReadonly = false;

  public counter = 1;
  public activeSlide: any = 0;
  public ProductDetailsThumbConfig: any = {
    items: 3,
    loop: true,
    margin: 10,
    dots: false
  };
  organizationName;

  productDto : ProductDto | null;
  selectedProductDetail: ProductDetailDto | null;

  constructor(private location: Location, private route: ActivatedRoute,
              public websiteSingleProductService: WebsiteSingleProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getProductWithDetail('organization1.com','wwwwww');
    });
  }

  getProductWithDetail(organizationWebAddress:string, productDetailSeoUrl:string){

    const singleProductSearchDto: SingleProductSearchDto= new SingleProductSearchDto(organizationWebAddress,productDetailSeoUrl);
    this.websiteSingleProductService.getProductWithDetail<ResponseMessage<ProductDto>>(singleProductSearchDto)
      .subscribe((res: HttpResponse<ResponseMessage<ProductDto>>) => {
        console.log(res.body ? res.body.data:null);
        this.productDto = res.body ? res.body.data : null;
        this.selectedProductDetail = this.productDto?.productDetailList ?
          this.productDto?.productDetailList.filter(e=> e.seoUrl === productDetailSeoUrl)[0] : null;
      });
  }
  increment() {
    this.counter++ ;
  }

  decrement() {
    if (this.counter > 1){
      this.counter--;
    }
  }

  async addToCart(product: any) {

  }

  async buyNow(product: any) {

  }

  addToWishlist(product: any) {

  }

  showImage(image: number) {

  }

  selectSize( productDetailDto: ProductDetailDto) {
    console.log(productDetailDto);
  }

  selectModel(productDetailDto: ProductDetailDto) {

  }

  selectColor(productDetailDto: ProductDetailDto) {

  }

  selectBrand(productDetailDto: ProductDetailDto) {

  }
}
