import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<boolean> | Promise<boolean> | boolean {
        return true;
        // console.log('on canActivate');
        if (localStorage.getItem('accessToken')) { return true; }
        /*if (this.authService.isAuthenticated) {
            return true;
        }*/
        this.router.navigate([`/login`]);
        return false;

    }
}
