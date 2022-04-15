import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Product} from '../../entity/product';
import {ProductService} from '../../services/misc/product.service';
import {QuickViewComponent} from '../quick-view/quick-view.component';
import {CartService} from '../../services/misc/cart.service';
import {WishListService} from '../../services/misc/wishlist.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {
  @Input() productDetail;
  @Input() currency: any = this.productService.Currency;
  @Input() thumbnail = false;
  @Input() cartModal = false;
  @Input() loader = false;
  @Input() organizationName;
  @ViewChild('quickView') quickView: QuickViewComponent;

  public ImageSrc: string;

  constructor(private productService: ProductService, private cartService: CartService,
              private wishListService: WishListService) { }
  ngOnInit(): void {
    if (this.loader) {
      setTimeout(() => { this.loader = false; }, 2000);
    }
  }

  addToCart(product: any) {
    this.cartService.addProductToCart(product);
  }

  addToWishList(product: any) {
    this.wishListService.addProductToWishList(product);
  }

  showQuickView(product: Product) {
    this.quickView.openModal();
  }

  getEncodeURI(name: any) {
    return encodeURI(name);
  }
}
