import {Component, NgModule, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthGuard} from '../../shared/services/auth/auth.guard';
import {WebsiteHomeService} from './service/website-home.service';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ThemeCategoryLoaderModule} from './theme-loader/category/theme-category-loader.module';
import {DynamicPageModule} from './theme-jamuna/dynamic-page/dynamic-page.module';

@Component({
  selector: 'app-website',
  template: `<router-outlet></router-outlet>`
})
export class WebsiteComponent implements OnInit {
  ngOnInit(): void {}
}

@NgModule({
  declarations: [WebsiteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: WebsiteComponent,
        children: [
          {path: '', loadChildren: () => import('./theme-loader/home/theme-home-loader.module')
              .then(m => m.ThemeHomeLoaderModule) , canActivate: [AuthGuard] },

          {path: 'category/:category', loadChildren: () => import('./theme-loader/category/theme-category-loader.module')
              .then(m => m.ThemeCategoryLoaderModule) , canActivate: [AuthGuard] },

          {path: 'product/:product', loadChildren: () => import('./theme-loader/single-product/theme-single-product-loader.module')
              .then(m => m.ThemeSingleProductLoaderModule) , canActivate: [AuthGuard] },

          {path: 'checkout', loadChildren: () => import('./theme-loader/checkout/theme-checkout-loader.module')
              .then(m => m.ThemeCheckoutLoaderModule) , canActivate: [AuthGuard] },

          {path: 'cart', loadChildren: () => import('./theme-loader/cart/theme-cart-loader.module')
              .then(m => m.ThemeCartLoaderModule) , canActivate: [AuthGuard] },

          {path: ':page', loadChildren: () => import('./theme-loader/dynamic-page/theme-dynamic-page-loader.module')
              .then(m => m.ThemeDynamicPageLoaderModule) , canActivate: [AuthGuard] },

        ]
      }
    ]),
    CarouselModule,
  ],
  providers: [
    AuthGuard,WebsiteHomeService
  ]
})
export class WebsiteModule {}


