import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';

import { AuthService } from './auth.service';
import {Observable} from 'rxjs';
/*import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {map} from 'rxjs/operators';*/

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    authService: AuthService;

    constructor(private injector: Injector) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /*this.authService = this.injector.get(AuthService);
        const token = this.authService.getToken();
        if (token) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', token)
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }*/

        return next.handle(req);

        /*return next.handle(req)
            .map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse ) {
                    event = event.clone({ body: this.modifyBody(event.body)});
                }
                return event;
            })
            .catch((err: any, caught) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 403) {
                        console.log('err.error', err.error);
                    }
                    return Observable.throw(err);
                }
            });*/
    }

    private modifyBody(body: any) {

    }

}
