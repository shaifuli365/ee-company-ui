import {Injectable} from '@angular/core';
import {CrudService} from '../../../shared/services/crud.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ProductDetailSearchDto} from '../../dto/ProductDetailSearchDto';
import {SingleProductSearchDto} from '../../dto/SingleProductSearchDto';

@Injectable()
export class WebsiteSingleProductService {

  constructor( private crudService: CrudService, private http: HttpClient) { }



  getProductWithDetail<T extends object>(singleProductSearchDto: SingleProductSearchDto):Observable<HttpResponse<T>> {

    return this.crudService.post<T>( singleProductSearchDto, '/productDetail/getProductWithProductDetailBySeoUrl', false, false);
  }

  getProductDetailList(productId):Observable<any> {

    return of();
  }
}
