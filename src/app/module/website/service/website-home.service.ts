import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CrudService} from '../../../shared/services/crud.service';
import {OrganizationDto} from '../../model/OrganizationDto';
import { WebsiteDisplayGroupProductDetailProjection } from '../../model/WebsiteDisplayGroupProductDetailProjection';


@Injectable()
export class WebsiteHomeService {

  constructor( private crudService: CrudService, private http: HttpClient) { }

  getOrganizationWebsite(): string{
    /* this.activatedRoute.queryParams.subscribe(params => {});
     this.activatedRoute.params.subscribe((params: Params) => {
       this.organizationName = params['orgName'];
     });
     const list = decodeURIComponent(this.location.path()).split('/');
     this.organizationName = list[1];*/
    return "diu";
  }


  getMenuList<T extends object>(organizationWebAddress): Observable<any> {
    return this.crudService.get({organizationWebAddress: organizationWebAddress}, '/websiteMenu/getAllMenuListByOrganizationName', false, true);
  }

  getProductGroupList(orgName): Observable<any> {
    return this.crudService.get( {orgName}, '/productGroup/getAllWithChildByOrgName', false, false);
  }

  getBannerList(orgName): Observable<any> {
    return this.crudService.get( {orgName}, '/websiteBanner/getAllByOrgName', false, false);
  }

  getProductList(): Observable<any> {
    return this.http.get('assets/data/products16.json');
  }

  getDisplayGroupList<T extends object>(organizationWebAddress:string):Observable<HttpResponse<T>> {
    return this.crudService.get<T>( {organizationWebAddress}, '/websiteDisplayGroupProductDetail/getAllByOrgName', false, false);
  }

  makeNavItemRecursively(pgList, navItems, organizationName:string){
    console.dir(pgList);
    for (let i = 0; i < pgList.length; i++) {
      navItems[i] = {
        displayName: pgList[i].name,
        iconName: 'insert_chart_outlined',
        route: this.getEncodeURI(organizationName) + '/category/' + this.getEncodeURI(pgList[i].name),
        children: []
      };
      if (pgList[i].productGroupChildList.length > 0){
        this.makeNavItemRecursively(pgList[i].productGroupChildList, navItems[i].children, organizationName);
      }
    }
  }

  getEncodeURI(uri: any) {
    return encodeURI(uri);
  }

  getOrganizationWebAddress(location: Location): Observable<string> {
    //console.log(location.hostname);
    return of('diu.com')
  }

  getOrganizationByWebAddress(webAddress: string): Observable<OrganizationDto> {
    console.log(location.hostname);
    return of(new OrganizationDto(true,''))
  }
}
