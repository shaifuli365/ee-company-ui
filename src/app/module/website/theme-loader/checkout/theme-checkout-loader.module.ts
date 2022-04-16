import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CrudService} from '../../../../common/service/crud.service';
import {WebsiteService} from '../../service/website.service';
import {ThemeCheckoutLoaderComponent} from './theme-checkout-loader.component';
import {WebsiteCheckoutService} from '../../service/website-checkout.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ThemeCheckoutLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeCheckoutLoaderComponent,
    }]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    WebsiteService,
    CrudService,
    WebsiteCheckoutService
  ]
})
export class ThemeCheckoutLoaderModule {}
