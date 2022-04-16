import {Injectable} from '@angular/core';
import {CrudService} from '../../../shared/services/crud.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class WebsiteSingleProductService {

  constructor( private crudService: CrudService, private http: HttpClient) { }

  getProductWithDetail(orgName, productDetailSeoUrl):Observable<any> {

    return of();
  }

  getProductDetailList(productId):Observable<any> {

    return of();
  }
}
