import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-detail-box',
  templateUrl: './product-detail-box.component.html',
  styleUrls: ['./product-detail-box.component.scss']
})
export class ProductDetailBoxComponent implements OnInit {

  loader = false;
  @Input() productDetail;
  @Input() organizationName;

  constructor() {}

  ngOnInit(): void {

  }

  addToCart(product: any) {

  }

  addToWishlist(product: any) {

  }

  addToCompare(productDetail) {

  }

  getEncodeURI(organizationName: any) {
    return encodeURI(organizationName);
  }
}
