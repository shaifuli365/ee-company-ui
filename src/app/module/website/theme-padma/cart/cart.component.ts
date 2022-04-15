import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../../../shared/services/misc/product.service';
import {CartService} from '../../../../shared/services/misc/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products;
  constructor(public productService: ProductService, public cartService: CartService, private http: HttpClient) {
    // this.productService.cartItems.subscribe(response => this.products = response);
    this.http.get('assets/data/products16.json').subscribe(data => {
      this.products = data;
    });
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
