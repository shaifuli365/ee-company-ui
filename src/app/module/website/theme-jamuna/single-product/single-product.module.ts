import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RelatedProductComponent} from './widgets/related-product/related-product.component';
import {ServicesComponent} from './widgets/services/services.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {SkeletonProductBoxComponent} from './widgets/skeleton-product-box/skeleton-product-box.component';
import {SingleProductComponent} from './single-product.component';
import {ProductBoxModule} from '../../../../shared/ee-module/product-box/product-box.module';
import {
  ProductBoxVerticalSliderModule
} from '../../../../shared/ee-module/product-box-vertical-slider/product-box-vertical-slider.module';
import {MatTabsModule} from '@angular/material/tabs';
import {RatingModule} from 'ngx-bootstrap/rating';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SingleProductComponent,
    RelatedProductComponent,
    ServicesComponent,
    SkeletonProductBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SingleProductComponent},
    ]),
    CarouselModule,
    NgxSkeletonLoaderModule,
    ProductBoxModule,
    ProductBoxVerticalSliderModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule.forRoot()
  ]
})
export class SingleProductModule { }
