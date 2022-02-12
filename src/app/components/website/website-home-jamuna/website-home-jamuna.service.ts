import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../../shared/services/crud.service';
import {Observable} from 'rxjs';


@Injectable()
export class WebsiteHomeJamunaService {

    constructor( private crudService: CrudService, private http: HttpClient) { }

    getMenuList(organizationName): Observable<any> {
        return this.crudService.getList({organizationName}, '/websiteMenu/getAllMenuListByOrganizationName', false, true);
    }

    getProductGroupList(orgName): Observable<any> {
        return this.crudService.getList( {orgName}, '/productGroup/getAllWithChildByOrgName', false, false);
    }

    getBannerList(orgName): Observable<any> {
        return this.crudService.getList( {orgName}, '/websiteBanner/getAllByOrgName', false, false);
    }

    getProductList(): Observable<any> {
        return this.http.get('assets/data/products16.json');
    }

    getDisplayGroupListList(orgName) {
        return this.crudService.getList( {orgName}, '/websiteDisplayGroupProductDetail/getAllByOrgName', false, false);
    }
}
