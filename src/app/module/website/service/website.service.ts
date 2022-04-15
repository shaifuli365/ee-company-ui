import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CrudService} from '../../../shared/services/crud.service';
import {OrganizationDto} from '../../dto/OrganizationDto';
import { WebsiteDisplayGroupProductDetailProjection } from '../../dto/WebsiteDisplayGroupProductDetailProjection';


@Injectable()
export class WebsiteService {

  constructor( private crudService: CrudService, private http: HttpClient) { }

  getEncodeURI(uri: any) {
    return encodeURI(uri);
  }

  getOrganizationWebAddress(location: Location): Observable<string> {
    //console.log(location.hostname);
    return of('organization1.com')
  }

  getOrganizationByWebAddress(webAddress: string): Observable<OrganizationDto> {
    console.log(location.hostname);
    return of(new OrganizationDto(true,''))
  }
}
