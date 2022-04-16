import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CrudService} from '../../../../common/service/crud.service';
import {WebsiteService} from '../../service/website.service';
import {ThemeSingleProductLoaderComponent} from './theme-single-product-loader.component';
import {WebsiteSingleProductService} from '../../service/website-single-product.service';

@NgModule({
  declarations: [ThemeSingleProductLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeSingleProductLoaderComponent,
    }])
  ],
  providers: [
    WebsiteService,
    WebsiteSingleProductService ,
    CrudService
  ]
})
export class ThemeSingleProductLoaderModule {}
