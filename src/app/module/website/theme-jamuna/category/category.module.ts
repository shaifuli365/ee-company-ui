import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {GridComponent} from './widgets/grid/grid.component';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {SkeletonProductBoxComponent} from './widgets/skeleton-product-box/skeleton-product-box.component';
import {FormsModule} from '@angular/forms';
import {ProductBoxModule} from '../../../../shared/ee-module/product-box/product-box.module';

@NgModule({
  declarations: [
    CategoryComponent,
    GridComponent,
    SkeletonProductBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CategoryComponent},
    ]),
    CarouselModule,
    NgxSkeletonLoaderModule,
    ProductBoxModule,
    FormsModule
  ],
  providers: []
})
export class JamunaCategoryModule { }
