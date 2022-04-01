import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from './auth/auth.service';
import {PreferenceService} from './auth/preference.service';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {toFormData} from '../../common/util/form-util';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient, private toastrService: ToastrService,
              private authService: AuthService, private preferenceService: PreferenceService) {
  }

  /**
   * wrapper function for save WithOut file and auth and organization id
   */
  save(value, relativeUrl, orgMust= true, authMust= true): Observable<any> {

    let params:HttpParams = new HttpParams();
    if (orgMust){
      if (this.preferenceService.getSelectedOrgId() == null){
        this.toastrService.error( 'failed to save, select an organization', 'Error' );
        return new Observable();
      }
      params.append('organizationId',this.preferenceService.getSelectedOrgId());
    }
    let headers = {};
    if (authMust){
      headers = this.authService.getHeadersWithAccessToken();
    }
    return this.http.post(`${environment.apiUrl}${relativeUrl}`, value, {headers , params});
  }

  /**
   * wrapper function for save with file and auth and organization id
   */
  saveWithFile(value, relativeUrl, orgMust= true, authMust= true): Observable<any> {
    if (orgMust){
      if (this.preferenceService.getSelectedOrgId() == null){
        this.toastrService.error( 'failed to save, select an organization', 'Error' );
        return new Observable();
      }
      value = {...value, organizationId : this.preferenceService.getSelectedOrgId()};
    }
    if (authMust){
      return this.http.post(`${environment.apiUrl}${relativeUrl}`, toFormData(value),
        {headers: this.authService.getHeadersWithAccessToken(), reportProgress: true, observe: 'events'});
    }
    return this.http.post(`${environment.apiUrl}${relativeUrl}`, toFormData(value), { reportProgress: true, observe: 'events'});
  }

  /**
   * wrapper function for update with auth and organization id
   */
  update(value, relativeUrl, orgMust= true, authMust= true): Observable<any> {
    let params:HttpParams = new HttpParams();
    if (orgMust){
      if (this.preferenceService.getSelectedOrgId() == null){
        this.toastrService.error( 'failed to update, select an organization', 'Error' );
        return new Observable();
      }
      params.append('organizationId',this.preferenceService.getSelectedOrgId());
    }
    let headers = {};
    if (authMust){
      headers = this.authService.getHeadersWithAccessToken();
    }
    return this.http.put(`${environment.apiUrl}${relativeUrl}`, value, {headers , params});
  }


  /**
   * wrapper function for delete with id and auth and organization id
   */
  delete(id: any, relativeUrl,  message= 'Do you really want to delete?', orgMust = true, authMust= true ): Observable<any> {
    let params:HttpParams = new HttpParams().set('id',id);
    if (orgMust){
      if (this.preferenceService.getSelectedOrgId() == null){
        this.toastrService.error( 'failed to delete, select an organization', 'Error' );
        return new Observable();
      }
      params.append('organizationId',this.preferenceService.getSelectedOrgId());
    }
    let headers = {};
    if (authMust){
      headers = this.authService.getHeadersWithAccessToken();
    }

    return this.http.delete(`${environment.apiUrl}${relativeUrl}`, {headers, params});

    /*return of(id).pipe(mergeMap(val => this.confirmationDialogService.deleteConfirm(message)))*/
    /*return from(this.confirmationDialogService.deleteConfirm(message))
      .pipe(
        mergeMap(flag => {
          console.log(flag);
          if (flag){
            return this.http.delete(`${environment.apiUrl}${relativeUrl}`, {
              headers, params});
          }
          return this.getErrorObservable('user declined');
        })
      );*/
  }

  getErrorObservable(message = ''): Observable<any>  {
    return new Observable(observer => {
      observer.next({
        status: false,
        message,
        data: null,
        currentPage: 0,
        totalPages: 0,
        totalElements: 0
      });
      observer.complete(); });
  }

  /**
   * wrapper function for getting data with auth and organization id
   */
  get<T extends object>( params:object = {}, relativeUrl: string,
                         orgMust:boolean= false, authMust:boolean= true): Observable<HttpResponse<T>>{

    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    });

    if (orgMust){
      if (this.preferenceService.getSelectedOrgId() == null){
        this.toastrService.error( 'failed to get data, select an organization', 'Error' );
        return new Observable();
      }
     //  params = {...params, organizationId: this.preferenceService.getSelectedOrgId()};
      httpParams.append('organizationId', this.preferenceService.getSelectedOrgId());
    }
    if (authMust){
      return this.http.get<T>(
        `${environment.apiUrl}${relativeUrl}`,
        { headers:  this.authService.getHeadersWithAccessToken(),
          params: httpParams,
          observe: 'response',
          responseType : 'json'
        });

    }
    return this.http.get<T>(`${environment.apiUrl}${relativeUrl}`, {params: httpParams, observe: 'response', responseType : 'json'});
  }


  /**
   * wrapper function for getting data with auth and organization id
   */
  getPage(params: HttpParams, relativeUrl, orgMust= false, authMust= true): Observable<any> {
    if (orgMust) {
      if (this.preferenceService.getSelectedOrgId() == null){
        this.toastrService.error( 'failed to get data, select an organization', 'Error' );
        return new Observable();
      }
      params = params.set('organizationId', this.preferenceService.getSelectedOrgId());
    }
    if (authMust) {
      return this.http.get(`${environment.apiUrl}${relativeUrl}`,
        {headers:  this.authService.getHeadersWithAccessToken(), params});
    }
    return this.http.get(`${environment.apiUrl}${relativeUrl}`, {params});
  }

  getImage(params = {}, fullUrl, orgMust= false, authMust= true): Observable<HttpResponse<Blob>>{
    return this.http.get(fullUrl, {params, responseType: 'blob', observe: 'response'});
    // return this.http.get(`${environment.apiUrl}${relativeUrl}`, {responseType: 'arraybuffer'});
  }

}

