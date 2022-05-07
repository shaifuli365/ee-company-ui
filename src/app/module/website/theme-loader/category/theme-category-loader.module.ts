import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CrudService} from '../../../../common/service/crud.service';
import {ThemeCategoryLoaderComponent} from './theme-category-loader.component';
import {CategoryService} from '../../theme-jamuna/category/category.service';
import {WishListService} from '../../../../shared/services/misc/wishlist.service';
import {WebsiteService} from '../../service/website.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TruncatePipeModule} from '../../../../shared/pipes/truncate/truncate-pipe.module';


@NgModule({
  declarations: [ThemeCategoryLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeCategoryLoaderComponent,
    }]),
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    WebsiteService,
    CategoryService,
    CrudService,
    WishListService
  ]
})
export class ThemeCategoryLoaderModule {}
