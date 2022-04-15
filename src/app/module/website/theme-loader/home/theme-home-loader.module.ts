import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {WebsiteHomeService} from '../../service/website-home.service';
import {CrudService} from '../../../../common/service/crud.service';
import {ThemeHomeLoaderComponent} from './theme-home-loader.component';
import {WebsiteService} from '../../service/website.service';

@NgModule({
  declarations: [ThemeHomeLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeHomeLoaderComponent,
    }])
  ],
  providers: [
    WebsiteService,
    WebsiteHomeService ,
    CrudService
  ]
})
export class ThemeHomeLoaderModule {}
