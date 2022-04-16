import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../../../shared/services/misc/product.service';
import {WebsiteCheckoutService} from '../../service/website-checkout.service';
import {ProductDetailDto} from '../../../dto/ProductDetailDto';
import {classToObj} from '../../../../common/util/object-util';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public checkoutForm: FormGroup;
  public cartProductList:Array<ProductDetailDto> = [];
  public payment = 'Stripe';
  public amount: any;

  constructor(private fb: FormBuilder,
              public productService: ProductService,
              private websiteCheckoutService: WebsiteCheckoutService,
              private http: HttpClient) {
    this.checkoutForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.maxLength(50)]],
      country: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      postalcode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCartProductList().subscribe((res:Array<ProductDetailDto>) => {
        this.cartProductList= res;
    }, err => {});
    this.getTotal.subscribe(amount => this.amount = amount);
    this.initConfig();
  }

  public get getTotal(): Observable<number> {
    // return this.productService.cartTotalAmount();
    return of();
  }

  stripeCheckout() {
   /* var handler = (<any>window).StripeCheckout.configure({
      key: environment.stripe_token, // publishble key
      locale: 'auto',
      token: (token: any) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.orderService.createOrder(this.products, this.checkoutForm.value, token.id, this.amount);
      }
    });
    handler.open({
      name: 'Ecommerce',
      description: 'Online Fashion Store',
      amount: this.amount * 100
    });*/
  }

  // Paypal Payment Gateway
  private initConfig(): void {
    /*this.payPalConfig = {
        currency: this.productService.Currency.currency,
        clientId: environment.paypal_token,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
          intent: 'CAPTURE',
          purchase_units: [{
              amount: {
                currency_code: this.productService.Currency.currency,
                value: this.amount,
                breakdown: {
                    item_total: {
                        currency_code: this.productService.Currency.currency,
                        value: this.amount
                    }
                }
              }
          }]
      },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            size:  'small', // small | medium | large | responsive
            shape: 'rect', // pill | rect
        },
        onApprove: (data, actions) => {
            this.orderService.createOrder(this.products, this.checkoutForm.value, data.orderID, this.getTotal);
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });
        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };*/
  }

  private getCartProductList():Observable<Array<ProductDetailDto>> {
    const pd1:ProductDetailDto = classToObj(ProductDetailDto,{id:1,seoTitle:'seoTitle 1',size:'small'})
    const pd2:ProductDetailDto = classToObj(ProductDetailDto,{id:2,seoTitle:'seoTitle 2',size:'medium'})
    const pd3:ProductDetailDto = classToObj(ProductDetailDto,{id:3,seoTitle:'seoTitle 3',size:'large'})

    return of([pd1,pd2,pd3]);
  }
}
