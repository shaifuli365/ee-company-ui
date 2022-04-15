import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {JwtService} from './jwt.service';
import {map} from 'rxjs/operators';
import jwt_decode from "jwt-decode";
import {AuthResponse} from '../model/auth-response';
import {CurrentUser} from '../model/current-user';
import {apiUriLocation} from '../model/api-uri-location';

@Injectable()
export class UserAuthService {

  constructor(private apiService: ApiService, private http: HttpClient, private jwtService: JwtService) {}

  forgetPassword(params: HttpParams) {
    return this.apiService.get('', params);
  }


  haveAuthentication() {
    const token = this.jwtService.getToken();
    if (token !== null && token !== null && token !== '') {
      return true;
    }
    return false;
  }

  purgeAuth() {
    this.jwtService.destroyToken();
  }

  setAuth(authResponse: AuthResponse) {
    this.jwtService.saveToken(authResponse);
  }

  login(credentials:any): Observable<Response> {
    this.purgeAuth();
    return this.apiService.post('', credentials)
      .pipe(map(
        (resp) => {
          // console.log(resp);
          if (resp.code === 200) {
            this.setAuth(resp['data']);
          }
          return resp;
        }
      ));
  }

  //logout(): Observable<any> {
  logout(): void {
    this.purgeAuth();
    /*const params = new HttpParams().set('token', this.jwtService.getRefreshToken().toString());
    return this.apiService.get(this.LOGOUT, params);*/
  }

  refreshToken(): Observable<any> {
    const params = new HttpParams()
      .set('token', this.jwtService.getRefreshToken().toString());
    return this.apiService.get('', params);
  }

  getAuthCurrentUser(): CurrentUser {
    const token = this.jwtService.getToken();
    const decodedToken = this.getDecodedAccessToken(token.toString());
    const currentUser = new CurrentUser();
    if (decodedToken) {
      currentUser.firstName = decodedToken.given_name;
      currentUser.lastName = decodedToken.family_name;
      currentUser.name = decodedToken.name;
      currentUser.email = decodedToken.email;
      // currentUser.roles = decodedToken.resource_access['somc-hims-test']?.roles;
      currentUser.departmentIdList = decodedToken.departmentIdList;
      currentUser.roomIdList = decodedToken.roomIdList;
    }
    return currentUser;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      // console.log(token);
      return null;
    }
  }

}
