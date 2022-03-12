import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable()
export class AuthRoleGuard implements CanActivate {

  constructor(private router: Router, private userAuthService: UserAuthService) { }

  //todo change according to acl
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
    /*if (route.data.roles && this.hasRolePermission(route.data.roles)) {
      return true;
    }
    this.router.navigateByUrl('/modules/registration/no-route');
    return false;*/
  }

  /*hasRolePermission(roles: string[]): string {
    let role;
    roles.forEach(item => {
      if (this.userAuthService.getAuthCurrentUser().roles.includes(item)) {
        return role = item;
      }
    });
    return role;
  }*/

}
