import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SliderComponent} from './widgets/slider/slider.component';
import {LogoComponent} from './widgets/logo/logo.component';
import {CollectionComponent} from './widgets/collection/collection.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SkeletonProductBoxComponent} from './widgets/skeleton-product-box/skeleton-product-box.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {FooterOneComponent} from './widgets/footer-one/footer-one.component';
import {WebsiteHomePadmaComponent} from './website-home-padma.component';
import {ProductBoxModule} from '../../../shared/module/product-box/product-box.module';
import {WebsiteHomePadmaService} from './website-home-padma.service';
import {ServiceIconComponent} from './widgets/service-icon/service-icon.component';
import {DisplayGroupComponent} from './widgets/display-group/display-group.component';
import {ProductDetailBoxComponent} from './widgets/product-detail-box/product-detail-box.component';
import {MatListModule} from '@angular/material/list';
import {TruncatePipeModule} from '../../../shared/pipes/truncate/truncate-pipe.module';
import {MultilevelCategoryModule} from '../../../shared/module/multilevel-category/multilevel-category.module';
import {ImageSliderModule} from '../../../shared/module/image-slider/image-slider.module';

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
    LogoComponent,
    CollectionComponent,
    SkeletonProductBoxComponent,
    FooterOneComponent,
    ServiceIconComponent,
    DisplayGroupComponent,
    ProductDetailBoxComponent,
  ],
  imports: [
    CommonModule,
    WebsiteHomeRoutingModule,
    CarouselModule,
    NgbModule,
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
