import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {indexInList, isInList} from '../../../common/util/single-collection-util';

@Injectable()
export class CartService {

  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  public addProductToCart(product:any): any {
    const cartProductListStr = localStorage.getItem('cartProductList');
    let cartProductList:Array<any> = [];
    if (cartProductListStr !== null){
      cartProductList = JSON.parse( cartProductListStr );
    }
    if (!isInList(cartProductList, product, 'id')){
      cartProductList.push(product);
    }
    else{
      // console.log('already in product cart');
      // todo increment quantity
    }
    localStorage.setItem('cartProductList', JSON.stringify(cartProductList));
  }

  removeProductFromCart(product) {
    const cartProductList = JSON.parse(localStorage.getItem('cartProductList') || '[]');
    const index = indexInList(cartProductList, product, 'id');
    if (index !== -1 ){
      cartProductList.splice(index, 1);
    }
    localStorage.setItem('cartProductList', JSON.stringify(cartProductList));
  }

  getAllProductFromCart() {
    return  JSON.parse(localStorage.getItem('cartProductList') || '[]');
  }

  calculateCartTotalAmount(): number {
    return 0;
  }

}
