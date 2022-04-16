import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../../../shared/services/misc/product.service';
import {ProductDetailDto} from '../../../dto/ProductDetailDto';
import {WebsiteCartService} from '../../service/website-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public productDetailDtoList:Array<ProductDetailDto> = [];

  constructor(public productService: ProductService,
              public websiteCartService: WebsiteCartService,
              private http: HttpClient) {

  }

  ngOnInit(): void { }

  increment(product, qty = 1) {
    console.log(product);
  }

  decrement(product, qty = -1) {
    console.log(product);
  }

  public removeItem(product: any) {
    console.log(product);
  }
}
