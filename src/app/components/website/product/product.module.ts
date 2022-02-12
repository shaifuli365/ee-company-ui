import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product.component';
import {RelatedProductComponent} from './widgets/related-product/related-product.component';
import {ServicesComponent} from './widgets/services/services.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SkeletonProductBoxComponent} from './widgets/skeleton-product-box/skeleton-product-box.component';
import {ProductBoxVerticalSliderModule} from '../../../shared/module/product-box-vertical-slider/product-box-vertical-slider.module';
import {ProductBoxModule} from '../../../shared/module/product-box/product-box.module';

@NgModule({
  declarations: [
    ProductComponent,
    RelatedProductComponent,
    ServicesComponent,
    SkeletonProductBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductComponent},
    ]),
    CarouselModule,
    NgxSkeletonLoaderModule,
    NgbModule,
    ProductBoxModule,
    ProductBoxVerticalSliderModule,
  ]
})
export class ProductModule { }
