import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageSliderComponent} from './image-slider.component';
import {CarouselModule} from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  providers: [],
  exports: [
    ImageSliderComponent
  ],
})
export class ImageSliderModule {
  constructor(){ }
}
