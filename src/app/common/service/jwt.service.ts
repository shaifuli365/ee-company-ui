import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {AuthResponse} from '../model/auth-response';


@Injectable()
export class JwtService {

  constructor(private cookieService: CookieService) {
  }

  getToken(): String {
    return this.cookieService.get('access_token');
  }

  getRefreshToken(): String {
    return this.cookieService.get('refresh_token');
  }

  public getTokenWithBearer() {
    const token = this.cookieService.get('access_token');
    if (token !== undefined && token !== null && token !== '') {
      return 'Bearer ' + token;
    }
    return '';
  }

  saveToken(response: AuthResponse) {
    this.cookieService.set('access_token', response.access_token, 30, '', '', false, 'Strict');
    this.cookieService.set('refresh_token', response.refresh_token, 30, '', '', false, 'Strict');
  }

  destroyToken() {
    this.cookieService.delete('access_token');
    this.cookieService.delete('refresh_token');
  }

}
