import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CrudService} from '../../../../common/service/crud.service';
import {WebsiteService} from '../../service/website.service';
import {ThemeCartLoaderComponent} from './theme-cart-loader.component';
import {WebsiteCartService} from '../../service/website-cart.service';

@NgModule({
  declarations: [ThemeCartLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeCartLoaderComponent,
    }])
  ],
  providers: [
    WebsiteService,
    CrudService,
    WebsiteCartService
  ]
})
export class ThemeCartLoaderModule {}
