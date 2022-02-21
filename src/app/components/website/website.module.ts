import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebsiteComponent} from './website.component';
import {RouterModule} from '@angular/router';
import {HeaderOneModule} from '../../shared/module/header-one/header-one.module';
import {AuthGuard} from '../../shared/services/auth/auth.guard';
import {WebsiteService} from './website.service';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: WebsiteComponent,
      children: [
        {path: '', loadChildren: () => import('./website-home-padma/website-home-padma.module')
              .then(m => m.WebsiteHomePadmaModule) , canActivate: [AuthGuard] },
        /*{path: 'cart', loadChildren: () => import('./website-home-padma/cart/cart.module').then(m => m.CartModule) , canActivate: [AuthGuard] },
        {path: 'checkout', loadChildren: () => import('./website-home-padma/checkout/checkout.module').then(m => m.CheckoutModule) , canActivate: [AuthGuard] },
        {path: 'category/:category', loadChildren: () => import('./website-home-padma/category/category.module').then(m => m.CategoryModule) , canActivate: [AuthGuard] },
        {path: 'product/:product', loadChildren: () => import('./website-home-padma/product/product.module').then(m => m.ProductModule) , canActivate: [AuthGuard] },
        {path: ':dynamicPage', loadChildren: () => import('./website-home-padma/dynamic-page/dynamic-page.module').then(m => m.DynamicPageModule) , canActivate: [AuthGuard] },
        */{path: '**', redirectTo: 'home', },
      ]
    }
  ])],
  exports: [RouterModule],
  declarations: []
})
export class  WebsiteRoutingModule{}

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    // RouterDecideModule,
    HeaderOneModule,
  ],
  providers: [WebsiteService]
})
export class WebsiteModule{}


