import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SliderComponent} from './widgets/slider/slider.component';
import {CollectionComponent} from './widgets/collection/collection.component';
import {SkeletonProductBoxComponent} from './widgets/skeleton-product-box/skeleton-product-box.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {WebsiteHomePadmaComponent} from './website-home-padma.component';
import {WebsiteHomePadmaService} from './website-home-padma.service';
import {DisplayGroupComponent} from './widgets/display-group/display-group.component';
import {ProductDetailBoxComponent} from './widgets/product-detail-box/product-detail-box.component';
import {MatListModule} from '@angular/material/list';
import {ProductBoxModule} from '../../../../shared/ee-module/product-box/product-box.module';
import {TruncatePipeModule} from '../../../../shared/pipes/truncate/truncate-pipe.module';
import {ImageSliderModule} from '../../../../shared/ee-module/image-slider/image-slider.module';
import {MultilevelCategoryModule} from '../../../../shared/module/multilevel-category/multilevel-category.module';

const routes: Routes = [
  {path: '', component: WebsiteHomePadmaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteHomeRoutingModule { }

@NgModule({
  declarations: [
    WebsiteHomePadmaComponent,
    SliderComponent,
    CollectionComponent,
    SkeletonProductBoxComponent,
    DisplayGroupComponent,
    ProductDetailBoxComponent,
  ],
  imports: [
    CommonModule,
    WebsiteHomeRoutingModule,
    CarouselModule,
    NgxSkeletonLoaderModule,
    ProductBoxModule,
    MultilevelCategoryModule,
    MatListModule,
    TruncatePipeModule,
    ImageSliderModule
  ],
  providers: [WebsiteHomePadmaService]
})
export class WebsiteHomePadmaModule { }
