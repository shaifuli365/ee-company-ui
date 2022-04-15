import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CrudService} from '../../../../common/service/crud.service';
import {ThemeCategoryLoaderComponent} from './theme-category-loader.component';
import {CategoryService} from '../../theme-jamuna/category/category.service';
import {WishListService} from '../../../../shared/services/misc/wishlist.service';
import {CartService} from '../../../../shared/services/misc/cart.service';


@NgModule({
  declarations: [ThemeCategoryLoaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ThemeCategoryLoaderComponent,
    }])
  ],
  providers: [CategoryService ,
    CrudService,
    WishListService,
    CartService ]
})
export class ThemeCategoryLoaderModule {}
