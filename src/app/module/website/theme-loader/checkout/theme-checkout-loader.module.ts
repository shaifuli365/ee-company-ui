import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CrudService} from '../../../../common/service/crud.service';
import {WebsiteService} from '../../service/website.service';
import {ThemeCheckoutLoaderComponent} from './theme-checkout-loader.component';

@NgModule({
  declarations: [ThemeCheckoutLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeCheckoutLoaderComponent,
    }])
  ],
  providers: [
    WebsiteService,
    CrudService
  ]
})
export class ThemeCheckoutLoaderModule {}
