import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CrudService} from '../../../../common/service/crud.service';
import {WebsiteService} from '../../service/website.service';
import {ThemeDynamicPageLoaderComponent} from './theme-dynamic-page-loader.component';
import {WebsiteDynamicPageService} from '../../service/website-dynamic-page.service';

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
    WebsiteDynamicPageService ,
    CrudService
  ]
})
export class ThemeDynamicPageLoaderModule {}
