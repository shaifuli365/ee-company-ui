import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, Input,
  Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

import { ProductService } from '../../services/misc/product.service';
import {Product} from '../../entity/product';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit, OnDestroy  {

  @Input() product: Product;
  @Input() currency: any;
  @ViewChild('quickView', { static: false }) QuickView: TemplateRef<any>;
  public ImageSrc: string;
  public counter = 1;
  public modalOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private router: Router,
              public productService: ProductService) { }

  ngOnInit(): void {}

  openModal() {
    this.modalOpen = true;
    if (isPlatformBrowser(this.platformId)) {
     /* this.modalService.open(this.QuickView, {
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'Quickview'
      }).result.then((result) => {
        console.log(result);
      }, (reason) => {
          if (reason === ModalDismissReasons.ESC) {
            console.log('by pressing ESC');
          } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            console.log('by clicking on a backdrop');
          } else {
            console.log(reason);
          }
      });*/
    }
  }


  Color(variants) {
    const uniqColor = [];
    /*for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }*/
    return uniqColor;
  }

  Size(variants) {
    const uniqSize = [];
    /*for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqSize.indexOf(variants[i].size) === -1 && variants[i].size) {
        uniqSize.push(variants[i].size);
      }
    }*/
    return uniqSize;
  }

  ChangeVariants(color, product) {
    product.variants.map((item) => {
      if (item.color === color) {
        product.images.map((img) => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }

  increment() {
    this.counter++ ;
  }

  decrement() {
    if (this.counter > 1) { this.counter-- ; }
  }

  async addToCart(product: any) {
    console.log(product);
    // this.router.navigate(['/shop/cart']);
  }

  ngOnDestroy() {
    if (this.modalOpen){
      //this.modalService.dismissAll();
    }
  }
}
