import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {WebsiteSingleProductService} from '../../service/website-single-product.service';
import {ResponseMessage} from '../../../model/ResponseMessage';
import {Page} from '../../../model/page';
import {ProductDetailDto} from '../../../dto/ProductDetailDto';
import {HttpResponse} from '@angular/common/http';
import {SingleProductSearchDto} from '../../../dto/SingleProductSearchDto';
import {ProductWithProductDetailDto} from '../../../dto/ProductWithProductDetailDto';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  public counter = 1;
  public activeSlide: any = 0;
  public ProductDetailsThumbConfig: any = {
    items: 3,
    loop: true,
    margin: 10,
    dots: false
  };
  organizationName;
  productDetailList;
  productDetail;
  productDetailUrl;

  constructor(private location: Location, private route: ActivatedRoute,
              public websiteSingleProductService: WebsiteSingleProductService) {

    this.productDetail = {
      id: 1,
      seoUrl: 'trim dress',
      seoTitle: 'trim dress',
      sizeModel: 'trim dress',
      basePrice: 100,
      currentSalePrice: 150,
      description: 'It is a long established fact that a reader will be distracted ',
      specification: [{key: 'battery', value: '2000mah'}, {key: 'monitor', value: '32inch'}],
      subSku: '008',
      captionTitle: 'premium product',
      captionBgColor: '#000000',
      year: 2019,
      product: {
        id: 1,
      }
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.getProductWithDetail('organization1.com','wwwwww');
    });
  }

  getProductWithDetail(organizationWebAddress:string, productDetailSeoUrl:string){

    const singleProductSearchDto: SingleProductSearchDto= new SingleProductSearchDto(organizationWebAddress,productDetailSeoUrl);
    this.websiteSingleProductService.getProductWithDetail<ResponseMessage<ProductWithProductDetailDto>>(singleProductSearchDto)
      .subscribe((res: HttpResponse<ResponseMessage<ProductWithProductDetailDto>>) => {
        console.log(res);
      });


  }

  getProductDetailList(productId){
    this.websiteSingleProductService.getProductDetailList(productId)
      .subscribe(res => {
        console.log(res.data);
        this.productDetailList = res.data;
      }, err => {});
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
}
