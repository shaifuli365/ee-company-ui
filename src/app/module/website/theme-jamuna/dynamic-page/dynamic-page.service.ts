import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {CrudService} from '../../../../shared/services/crud.service';
import {AuthService} from '../../../../shared/services/auth/auth.service';

@Injectable()
export class DynamicPageService {

  constructor(private http: HttpClient, private crudService: CrudService, private authService: AuthService) { }

  getWebsiteMenu(organizationName, menuTitle): Observable<any> {
    const params = { organizationName , menuTitle };
    return this.http.get(`${environment.apiUrl}/websiteMenu/getOneByOrganizationName`, { params});
  }

}
