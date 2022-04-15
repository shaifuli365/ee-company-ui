import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageLazyLoadComponent} from './image-lazy-load.component';

@NgModule({
  declarations: [ImageLazyLoadComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ImageLazyLoadComponent
  ],
})
export class ImageLazyLoadModule { }
