import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JamunaLayoutComponent} from './jamuna-layout.component';
import {JamunaHomeComponent} from '../home/jamuna-home.component';
import {JamunaFooterComponent} from '../footer/jamuna-footer.component';
import {JamunaHeaderComponent} from '../header/jamuna-header.component';
import {MatListModule} from '@angular/material/list';
import {JamunaService} from './jamuna.service';
import {ProductBoxModule} from '../../../../shared/module/product-box/product-box.module';
import {MultilevelCategoryModule} from '../../../../shared/module/multilevel-category/multilevel-category.module';
import {TruncatePipeModule} from '../../../../shared/pipes/truncate/truncate-pipe.module';
import {MultilevelNavModule} from '../../../../shared/module/multilevel-nav/multilevel-nav.module';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HttpClientModule} from '@angular/common/http';
import {CrudService} from '../../../../common/service/crud.service';

import {SliderComponent} from '../widgets/slider/slider.component';
import {LogoComponent} from '../widgets/logo/logo.component';
import {CollectionComponent} from '../widgets/collection/collection.component';
import {SkeletonProductBoxComponent} from '../widgets/skeleton-product-box/skeleton-product-box.component';
import {ServiceIconComponent} from '../widgets/service-icon/service-icon.component';
import {DisplayGroupComponent} from '../widgets/display-group/display-group.component';
import {ProductDetailBoxComponent} from '../widgets/product-detail-box/product-detail-box.component';

@NgModule({
  declarations: [
    JamunaLayoutComponent,
    JamunaHomeComponent,
    JamunaHeaderComponent,
    JamunaFooterComponent,
    SliderComponent,
    LogoComponent,
    CollectionComponent,
    SkeletonProductBoxComponent,
    ServiceIconComponent,
    DisplayGroupComponent,
    ProductDetailBoxComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CarouselModule,
    NgxSkeletonLoaderModule,
    ProductBoxModule,
    MultilevelNavModule,
    MatListModule,
    TruncatePipeModule,
    MultilevelCategoryModule
  ],
  providers: [CrudService]
})
export class JamunaLayoutModule {}
