import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {ProductBoxVerticalSliderComponent} from './product-box-vertical-slider.component';
import {CarouselModule} from 'ngx-owl-carousel-o';

@NgModule({
    declarations: [
        ProductBoxVerticalSliderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxSkeletonLoaderModule,
        CarouselModule
    ],
    exports: [
        ProductBoxVerticalSliderComponent
    ],
    providers: []
})
export class ProductBoxVerticalSliderModule { }
