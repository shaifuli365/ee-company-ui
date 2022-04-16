import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {WebsiteSingleProductService} from '../../service/website-single-product.service';

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
      const list = decodeURI(this.location.path()).split('/');
      this.organizationName = list[1];
      this.productDetailUrl = list[3];
      this.getProductWithDetail(list[1], list[3]);
    });
  }

  getProductWithDetail(orgName, productDetailSeoUrl){
    console.log(orgName);
    console.log(productDetailSeoUrl);
    this.websiteSingleProductService.getProductWithDetail(orgName, productDetailSeoUrl)
      .subscribe(res => {
        console.log(res);
        this.productDetail = res.data;
        this.getProductDetailList(res.data.id);
      }, err => {});
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
