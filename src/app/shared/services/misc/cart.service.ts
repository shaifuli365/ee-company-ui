import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';
import {Product} from '../../entity/product';
import {map} from 'rxjs/operators';
import {indexInList, isInList} from '../../util/collection-util';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  public addProductToCart(product): any {
    const cartProductListStr = localStorage.getItem('cartProductList');
    let cartProductList = [];
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
    const cartProductList = JSON.parse(localStorage.getItem('cartProductList'));
    const index = indexInList(cartProductList, product, 'id');
    if (index !== -1 ){
      cartProductList.splice(index, 1);
    }
    localStorage.setItem('cartProductList', JSON.stringify(cartProductList));
  }

  getAllProductFromCart() {
    return  JSON.parse(localStorage.getItem('cartProductList'));
  }


  public calculateCartTotalAmount(): number {
    return 0;
  }
}

