import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../../entity/product';
import {ProductService} from '../../services/misc/product.service';

export let NewProductSlider: any = {
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav',
  navClass: [ 'owl-prev', 'owl-next' ],
  navText: [ '<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>' ],
};


@Component({
  selector: 'app-product-box-vertical-slider',
  templateUrl: './product-box-vertical-slider.component.html',
  styleUrls: ['./product-box-vertical-slider.component.scss']
})
export class ProductBoxVerticalSliderComponent implements OnInit {

  @Input() title = 'New Product'; // Default
  @Input() type = 'fashion'; // Default Fashion

  public products: Product[] = [];

  public NewProductSliderConfig: any = NewProductSlider;

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response =>
      this.products = response.filter(item => item.type === this.type)
    );
  }

  ngOnInit(): void {
  }

}
