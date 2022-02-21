import {Injectable, NgModule} from '@angular/core';
import {RouterModule, Routes, ROUTES} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {WebsiteComponent} from './website.component';
import {AuthGuard} from '../../shared/services/auth/auth.guard';

/*@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: WebsiteComponent,
      children: [
        {path: '', loadChildren: () => import('./website-home-padma/website-home-padma.module')
              .then(m => m.WebsiteHomePadmaModule) , canActivate: [AuthGuard] },
        {path: 'cart', loadChildren: () => import('./website-home-padma/cart/cart.module').then(m => m.CartModule) , canActivate: [AuthGuard] },
        {path: 'checkout', loadChildren: () => import('./website-home-padma/checkout/checkout.module').then(m => m.CheckoutModule) , canActivate: [AuthGuard] },
        {path: 'category/:category', loadChildren: () => import('./website-home-padma/category/category.module').then(m => m.CategoryModule) , canActivate: [AuthGuard] },
        {path: 'product/:product', loadChildren: () => import('./website-home-padma/product/product.module').then(m => m.ProductModule) , canActivate: [AuthGuard] },
        {path: ':dynamicPage', loadChildren: () => import('./website-home-padma/dynamic-page/dynamic-page.module').then(m => m.DynamicPageModule) , canActivate: [AuthGuard] },
        {path: '**', redirectTo: 'home', },
      ]
    }
  ])],
  exports: [RouterModule],
  declarations: []
})
export class  WebsiteRoutingModule{}*/

@Injectable({providedIn: 'root'})
export class RouteDecideService {

  constructor(private http: HttpClient/*, private activatedRoute: ActivatedRoute*/) {}

  getSelectedThemeForOrg(): string {
    /*localStorage.setItem('selectedTheme', 'padma');
    return localStorage.getItem('selectedTheme');*/
    return 'padma';
  }
}

export async function getRoutes(rds: RouteDecideService) {
  let routes: Routes = [];

  if (rds.getSelectedThemeForOrg() === 'padma'){
    routes = [{path: '', loadChildren: () => import('./website-home-padma/website-home-padma.module')
          .then(m => m.WebsiteHomePadmaModule)  }];
  }
  if (rds.getSelectedThemeForOrg() === 'jamuna'){
    routes = [{path: '', loadChildren: () => import('./website-home-jamuna/website-home-jamuna.module')
          .then(m => m.WebsiteHomeJamunaModule)  }];
  }
  return routes;
}

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: WebsiteComponent,
        children: [
          {path: '', loadChildren: () => import('./website-home-padma/website-home-padma.module')
                .then(m => m.WebsiteHomePadmaModule) , canActivate: [AuthGuard] },
          {path: '**', redirectTo: 'home', },
        ]
      }
    ])
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: getRoutes,
      deps: [RouteDecideService],
      multi: true,
    }
  ]
})
export class WebsiteRoutingModule {

}




