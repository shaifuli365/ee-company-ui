import {Injectable, NgModule, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebsiteComponent} from './website.component';
import {RouterModule, ROUTES, Routes} from '@angular/router';
import {HeaderOneModule} from '../../shared/module/header-one/header-one.module';
import {AuthGuard} from '../../shared/services/auth/auth.guard';
import {WebsiteService} from './website.service';
import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: WebsiteComponent,
      children: [
        /*{path: ':orgName', loadChildren: () => import('./website-home-padma/website-home-padma.module')
            .then(m => m.WebsiteHomePadmaModule) , canActivate: [AuthGuard] },
        {path: ':orgName/jamuna', loadChildren: () => import('./website-home-jamuna/website-home-jamuna.module')
            .then(m => m.WebsiteHomeJamunaModule) , canActivate: [AuthGuard] },*/
        {path: ':orgName/cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) , canActivate: [AuthGuard] },
        {path: ':orgName/checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) , canActivate: [AuthGuard] },
        {path: ':orgName/category/:category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) , canActivate: [AuthGuard] },
        {path: ':orgName/product/:product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) , canActivate: [AuthGuard] },
        {path: ':orgName/:dynamicPage', loadChildren: () => import('./dynamic-page/dynamic-page.module').then(m => m.DynamicPageModule) , canActivate: [AuthGuard] },
        {path: '**', redirectTo: 'home', },
      ]
    }
  ])],
  exports: [RouterModule],
  declarations: []
})
export class  WebsiteRoutingModule{ }

@Injectable()
export class RouteDecideService implements OnDestroy {
  constructor(private http: HttpClient/*, private router: Router*/) {}
  getSeletedThemeForOrg(): string {
    // this.getSeletedThemeForOrg2();
    return 'jamuna';
  }

  getSeletedThemeForOrg2(): void {
    // console.log(this.router);
    /*this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params.orgName);
      return this.http.get(`${environment.apiUrl}/getThemeNameByOrgName`, {params: params.orgName}).subscribe(res => {
      }, err => {});
    });*/
  }
  ngOnDestroy(): void {}
}

export function getRoutes(rds: RouteDecideService) {
  let routes: Routes = [];
  if (rds.getSeletedThemeForOrg() === 'padma'){
    routes = [{path: ':orgName', loadChildren: () => import('./website-home-padma/website-home-padma.module')
        .then(m => m.WebsiteHomePadmaModule) , canActivate: [AuthGuard] }];
  }
  if (rds.getSeletedThemeForOrg() === 'jamuna'){
    routes = [{path: ':orgName', loadChildren: () => import('./website-home-jamuna/website-home-jamuna.module')
        .then(m => m.WebsiteHomeJamunaModule) , canActivate: [AuthGuard] }];
  }
  return routes;
}

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([])],
  providers: [
    {
      provide: ROUTES,
      useFactory: getRoutes,
      deps: [RouteDecideService],
      multi: true,
    },
    RouteDecideService,
  ]
})
export class RouterDecideModule { }

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    RouterDecideModule,
    HeaderOneModule,
  ],
  providers: [WebsiteService]
})
export class WebsiteModule {}


