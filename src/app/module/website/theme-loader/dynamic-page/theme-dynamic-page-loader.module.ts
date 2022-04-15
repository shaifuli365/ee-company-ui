import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {WebsiteHomeService} from '../../service/website-home.service';
import {CrudService} from '../../../../common/service/crud.service';
import {WebsiteService} from '../../service/website.service';
import {ThemeDynamicPageLoaderComponent} from './theme-dynamic-page-loader.component';

@NgModule({
  declarations: [ThemeDynamicPageLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeDynamicPageLoaderComponent,
    }])
  ],
  providers: [
    WebsiteService,
    WebsiteHomeService ,
    CrudService
  ]
})
export class ThemeDynamicPageLoaderModule {}
