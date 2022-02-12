import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageLazyComponent} from './image-lazy.component';

@NgModule({
  declarations: [ImageLazyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ImageLazyComponent
  ],
})
export class ImageLazyModule { }
