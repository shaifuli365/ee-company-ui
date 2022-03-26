import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {SliderComponent} from './widgets/slider/slider.component';
import {LogoComponent} from './widgets/logo/logo.component';
import {CollectionComponent} from './widgets/collection/collection.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SkeletonProductBoxComponent} from './widgets/skeleton-product-box/skeleton-product-box.component';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {FooterOneComponent} from './widgets/footer-one/footer-one.component';
import {WebsiteHomeJamunaComponent} from './website-home-jamuna.component';
import {ProductBoxModule} from '../../../shared/module/product-box/product-box.module';
import {WebsiteHomeJamunaService} from './website-home-jamuna.service';
import {ServiceIconComponent} from './widgets/service-icon/service-icon.component';
import {DisplayGroupComponent} from './widgets/display-group/display-group.component';
import {ProductDetailBoxComponent} from './widgets/product-detail-box/product-detail-box.component';
import {MultilevelNavModule} from '../../../shared/module/multilevel-nav/multilevel-nav.module';
import {MatListModule} from '@angular/material/list';
import {TruncatePipeModule} from '../../../shared/pipes/truncate/truncate-pipe.module';
import {MultilevelCategoryModule} from '../../../shared/module/multilevel-category/multilevel-category.module';

@NgModule({
  declarations: [
    WebsiteHomeJamunaComponent,
    SliderComponent,
    LogoComponent,
    CollectionComponent,
    SkeletonProductBoxComponent,
    FooterOneComponent,
    ServiceIconComponent,
    DisplayGroupComponent,
    ProductDetailBoxComponent,
    ProductDetailBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: WebsiteHomeJamunaComponent},
    ]),
    CarouselModule,
    NgbModule,
    NgxSkeletonLoaderModule,
    ProductBoxModule,
    MultilevelNavModule,
    MatListModule,
    TruncatePipeModule,
    MultilevelCategoryModule,
  ],
  providers: [WebsiteHomeJamunaService]
})
export class WebsiteHomeJamunaModule { }
