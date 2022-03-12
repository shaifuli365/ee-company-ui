import { Injectable } from '@angular/core';

import {AuthResponse} from '../model/auth-response';


@Injectable()
export class JwtService {

  constructor() {
  }

  getToken(): String {
    return '';
  }

  getRefreshToken(): String {
    return '';
  }

  public getTokenWithBearer() {

    return '';
  }

  saveToken(response: AuthResponse) {
  }

  destroyToken() {

  }

}
