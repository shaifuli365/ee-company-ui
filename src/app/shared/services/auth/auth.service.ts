import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class AuthService {
  headers: HttpHeaders = new HttpHeaders();
  userInfo: any;
  isAuthenticated: boolean;

  constructor(public http: HttpClient) { }

  logIn(username: string, password: string, rememberMe: boolean) {
    // console.log(username, password);
    return this.http.post<any>(environment.apiUrl + '/login', {  username, password , rememberMe})
      .pipe(map(res => {
        if (res.status) {
          const jwtToken = res.jwtToken;
          localStorage.setItem('accessToken', jwtToken);
          this.isAuthenticated = true;
          return res;
        } else {
          return res;
        }
      }));
  }

  registration(obj) {
    console.log(obj);
    return this.http.post<any>(environment.apiUrl + '/registration', obj);
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('roles');
    localStorage.removeItem('user');
    localStorage.removeItem('authority');
  }

  getToken(): any {
    if (localStorage.getItem('accessToken')) {
      return localStorage.getItem('accessToken');
    } else {
      return '';
    }
  }

  getHeadersWithAccessToken(): HttpHeaders {
    this.headers.append('Authorization', 'Bearer ' + this.getToken());
    return this.headers;
  }

  decodeJWT(jwtToken){
    const toArray =  jwtToken.split('.');
    const decodedString = atob(toArray[1]);
    console.log('decodedJWT', decodedString);
    for (const val of toArray) {
      console.log(val);
      console.log(atob(val));
    }
  }

}
