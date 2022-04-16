import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../../../../../shared/services/misc/product.service';
import {Product} from '../../../../../shared/entity/product';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.scss']
})
export class RelatedProductComponent implements OnInit {

  @Input() type: string;

  public productDetailList;

  constructor(public productService: ProductService) {

  }

  ngOnInit(): void {
  }

}
