import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {WebsiteHomeService} from '../../service/website-home.service';
import {CrudService} from '../../../../common/service/crud.service';
import {WebsiteService} from '../../service/website.service';
import {ThemeSingleProductLoaderComponent} from './theme-single-product-loader.component';

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
    WebsiteHomeService ,
    CrudService
  ]
})
export class ThemeSingleProductLoaderModule {}
