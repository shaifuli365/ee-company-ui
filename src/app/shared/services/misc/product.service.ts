import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Product} from '../../entity/product';
import {CrudService} from '../crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public Currency = { name: 'Dollar', currency: 'USD', price: 1 };
  public OpenCart = false;
  public Products;

  constructor(private http: HttpClient, private crudService: CrudService) { }

  private get products(): Observable<Product[]> {
    this.Products = this.http.get<Product[]>('assets/data/products16.json').pipe(map(data => data));
    this.Products.subscribe(next => { localStorage.products = JSON.stringify(next); });
    return this.Products = this.Products.pipe(startWith(JSON.parse(localStorage.products || '[]')));
  }

  public get getProducts(): Observable<Product[]> {
    return this.products;
  }

  public getProductBySlug(slug: string): Observable<Product> {
    return this.products.pipe(map(items => {
      return items.find((item: any) => {
        return item.title.replace(' ', '-') === slug;
      });
    }));
  }

  getProductWithDetail(orgName, productDetailSeoUrl): Observable<any> {
      return this.crudService.getList({orgName , productDetailSeoUrl},
        '/productDetail/getByOrgNameAndProductDetailName', false, false);
  }

  getProductDetailList(productId: any) {
    return this.crudService.getList({productId},
      '/productDetail/getProductDetailList', false, false);
  }
}
