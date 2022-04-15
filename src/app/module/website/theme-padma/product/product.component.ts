import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {SizeModalComponent} from './widgets/size-modal/size-modal.component';
import {Location} from '@angular/common';
import {ProductService} from '../../../../shared/services/misc/product.service';

@Component({
  selector: 'app-custom',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public counter = 1;
  public activeSlide: any = 0;
  @ViewChild('sizeChart') SizeChart: SizeModalComponent;
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

  constructor(private location: Location, private route: ActivatedRoute, public productService: ProductService) {

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
    this.productService.getProductWithDetail(orgName, productDetailSeoUrl)
      .subscribe(res => {
        console.log(res);
        this.productDetail = res.data;
        this.getProductDetailList(res.data.id);
      }, err => {});
  }

  getProductDetailList(productId){
    this.productService.getProductDetailList(productId)
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
