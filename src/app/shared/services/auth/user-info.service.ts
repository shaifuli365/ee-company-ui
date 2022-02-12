import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import {Token} from '../../entity/user-info';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';


@Injectable()
export class UserInfoService {

    userInfo: any;

    constructor(public http: HttpClient, private authService: AuthService) { }

    getUserInfoFromToken() {
        const token = localStorage.getItem('accessToken');
        const toArray =  token.split('.');
        const decodedString = atob(toArray[1]);
        // console.log(decodedString);
        // let obj = new Token();
        const obj = JSON.parse(decodedString);
        /*
        for (const val of toArray) {
            console.log(val);
            console.log(atob(val));
        }*/

        return decodedString;
    }

    getUserInfo(): Observable<any> {
        const headers = this.authService.getHeadersWithAccessToken();
        return this.http.get(`${environment.apiUrl}/userInfo/getUseInfo`, {headers});
    }

    getUserImage(): Observable<any> {
        const params = new HttpParams().set('id', '1');
        const headers = this.authService.getHeadersWithAccessToken();
        return this.http.get(`${environment.apiUrl}/userInfo/getUseInfo`, {headers, params});
    }



}
