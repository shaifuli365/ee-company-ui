import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserAuthService} from './user-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userAuthService: UserAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return true;
    if (this.userAuthService.haveAuthentication()) {
      return true;
    }
    this.router.navigateByUrl('/auth/login');
    return false;
  }
}
