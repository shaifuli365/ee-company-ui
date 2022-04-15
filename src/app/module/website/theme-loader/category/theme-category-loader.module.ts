import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {WebsiteHomeService} from '../../service/website-home.service';
import {CrudService} from '../../../../common/service/crud.service';
import {ThemeCategoryLoaderComponent} from './theme-category-loader.component';


@NgModule({
  declarations: [ThemeCategoryLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeCategoryLoaderComponent,
    }])
  ],
  providers: [WebsiteHomeService , CrudService ]
})
export class ThemeCategoryLoaderModule {}
