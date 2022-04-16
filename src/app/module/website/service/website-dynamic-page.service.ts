import {Injectable} from '@angular/core';
import {CrudService} from '../../../shared/services/crud.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class WebsiteDynamicPageService {

  constructor( private crudService: CrudService, private http: HttpClient) { }


  getWebsiteMenu(organizationName, menuTitle): Observable<any> {
    const params = { organizationName , menuTitle };
    return this.http.get(`${environment.apiUrl}/websiteMenu/getOneByOrganizationName`, { params});
  }

}
