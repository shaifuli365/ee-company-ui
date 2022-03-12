import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {JwtService} from './jwt.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  post(path: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.post(`${path}`, JSON.stringify(body), {params} )
      .pipe(catchError(this.formatErrors));
  }

  postV2<T>(path: string, body: Object = {}, params: HttpParams = new HttpParams() ): Observable<T> {
    return this.http.post<T>(path, body, {params} )
      .pipe(catchError(this.formatErrors))
  }

  postV3<T>(path: string, body: Object = {}, params: HttpParams = new HttpParams() ): Observable<HttpResponse<T>> {
    return this.http.post<T>(`${path}`, JSON.stringify(body), {params, observe: 'response'})
      .pipe(catchError(this.formatErrors))
  }

  fileUpload(path:any, formData:any): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders().append('req_type', 'file_upload');
    const req = new HttpRequest('POST', `${path}`, formData, {headers, reportProgress: true, responseType: 'json'});
    return this.http.request(req)
      .pipe(catchError(this.formatErrors))
  }

  fileUploadV2(path: string, body: Object = {}, params: HttpParams = new HttpParams()): Observable<any> {
    const httpOptions = {'params' : params, 'responseType'  : 'arraybuffer' as 'json'};
    return this.http.post(`${path}`, JSON.stringify(body), httpOptions)
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  putV2<T>(path: string, body: Object = {}, params: HttpParams = new HttpParams() ): Observable<T> {
    return this.http.put<T>(path, body, {params} )
      .pipe(catchError(this.formatErrors))
  }

  delete(path:any): Observable<any> {
    return this.http.delete(`${path}`)
      .pipe(catchError(this.formatErrors));
  }

  deleteV2<T>(path: string): Observable<T> {
    return this.http.delete<T>(path)
      .pipe(catchError(this.formatErrors))
  }

  get(path: string, params: HttpParams = new HttpParams() ): Observable<any> {
    return this.http.get(`${path}`, {params})
      .pipe(catchError(this.formatErrors));
  }


  getV2<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${path}`, {'params' : params, 'responseType' : 'arraybuffer' as 'json'})
      .pipe(catchError(this.formatErrors));
  }

  /**
   * get response
   * @param date example
   * @param pattern example
   * @return example
   */
  getV3<T>(path: string, params: HttpParams = new HttpParams()): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${path}`, {'params' : params, 'responseType': 'arraybuffer' as 'json', observe: 'response'})
      .pipe(catchError(this.formatErrors));
  }

  getV4<T>(path: string, params: HttpParams = new HttpParams()): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${path}`, {'params' : params, 'responseType': 'json', observe: 'response'})
      .pipe(catchError(this.formatErrors));
  }

  getV5<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${path}`, {'params' : params, 'responseType': 'json'})
      .pipe(catchError(this.formatErrors));
  }

}
