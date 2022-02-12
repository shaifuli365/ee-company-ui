import { Component, OnInit, OnDestroy, ViewChild, TemplateRef, Input, AfterViewInit,
  Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Product} from '../../entity/product';
import {ProductService} from '../../services/misc/product.service';


@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() product: Product;
  @Input() currency: any;

  @ViewChild('cartModal', { static: false }) CartModal: TemplateRef<any>;

  public closeResult: string;
  public modalOpen = false;
  public products: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              private modalService: NgbModal,
              private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  async openModal(product) {
    await this.productService.getProducts.subscribe(response => this.products = response);
    this.products = await this.products.filter(items => items.category === product.category && items.id !== product.id);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnDestroy() {
    if (this.modalOpen){
      this.modalService.dismissAll();
    }
  }

}
