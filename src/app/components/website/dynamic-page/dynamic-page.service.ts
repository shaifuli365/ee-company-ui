import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../../../shared/services/crud.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Injectable()
export class DynamicPageService {

  constructor(private http: HttpClient, private crudService: CrudService, private authService: AuthService) { }

  getWebsiteMenu(organizationName, menuTitle): Observable<any> {
    const params = { organizationName , menuTitle };
    return this.http.get(`${environment.apiUrl}/websiteMenu/getOneByOrganizationName`, { params});
  }

}
