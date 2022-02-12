import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import {GridComponent} from './widgets/grid/grid.component';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {SkeletonProductBoxComponent} from './widgets/skeleton-product-box/skeleton-product-box.component';
import {ProductBoxModule} from '../../../shared/module/product-box/product-box.module';
import {ProductBoxVerticalSliderModule} from '../../../shared/module/product-box-vertical-slider/product-box-vertical-slider.module';
import {FormsModule} from '@angular/forms';
import {CategoryService} from './category.service';

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
    ProductBoxVerticalSliderModule,
    /*NgbModule, */
    FormsModule
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
