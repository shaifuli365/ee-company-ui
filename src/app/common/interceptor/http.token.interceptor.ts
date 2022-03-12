import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';
import {JwtService} from '../service/jwt.service';
import {UserAuthService} from '../service/user-auth.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService,
              private router: Router,
              private userAuthService: UserAuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    let cloneReq = request.clone({ setHeaders: headersConfig });

    if (request.headers.get('req_type') === 'file_upload') {
      cloneReq = request.clone();
    }

    const token = this.jwtService.getToken().toString();
    return next.handle(this.injectToken(cloneReq, token)).pipe(catchError((err: HttpErrorResponse) => {
      return this.handleResponseError(err, cloneReq, next);
    }));
  }

  handleResponseError(error:any, request?:any, next?:any) :any {
    if (error.status === 401) {
      return this.userAuthService.refreshToken().pipe(
        switchMap((res: any) => {
          if (res.status === 200) {
            request = this.injectToken(request, res.response.access_token);
            this.userAuthService.setAuth(res.response);
            return next.handle(request);
          } else {
            this.jwtService.destroyToken();
            this.router.navigateByUrl('/auth/login');
            return next.handle(request);
          }
        }),
        catchError(e => {
          if (e.status !== 401) {
            return this.handleResponseError(e);
          } else {
            this.userAuthService.purgeAuth();
          }
        }));
    } else if (error.status === 403 || error.status === 503) {// Access denied error
      this.userAuthService.purgeAuth();
    }
    return throwError(error);
  }

  injectToken(request: HttpRequest<any>, token: string) {
    if (!request.url.includes('authenticate') && !request.url.includes('refresh-token')
      && !request.url.includes('reset-password') && !request.url.includes('forget-password')) {
      // console.log("auth url " + request.url);
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return request;
  }

}
