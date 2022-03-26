import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {indexInList, isInList} from '../../../common/util/single-collection-util';


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  public addProductToWishList(product: any): any {
    const wishListProductListStr = localStorage.getItem('wishListProductList');
    let wishListProductList:any = [];
    if (wishListProductListStr !== null){
      wishListProductList = JSON.parse( wishListProductListStr );
    }
    if (!isInList(wishListProductList, product, 'id')){
      wishListProductList.push(product);
    }
    else{
      // console.log('already in product cart');
      // todo increment quantity
    }
    localStorage.setItem('cartProductList', JSON.stringify(wishListProductList));
  }


  removeProductFromWishList(product) {
    const t : string | null = localStorage.getItem('cartProductList');
    const cartProductList = t ? JSON.parse(t) : [];
    const index = indexInList(cartProductList, product, 'id');
    if (index !== -1 ){
      cartProductList.splice(index, 1);
    }
    localStorage.setItem('cartProductList', JSON.stringify(cartProductList));
  }

  /*getAllProductFromWishList() {
    return  JSON.parse(localStorage.getItem('cartProductList'));
  }*/

}

