import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';


@Injectable()
export class UserInfoService {

    userInfo: any;

    constructor(public http: HttpClient, private authService: AuthService) { }

    getUserInfoFromToken() {
        const token: string | null = localStorage.getItem('accessToken');
        const toArray =  token? token.split('.') : '';
        const decodedString = toArray[1];
        const obj = JSON.parse(decodedString);
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
