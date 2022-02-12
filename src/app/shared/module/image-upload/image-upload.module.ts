import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUploadComponent} from './image-upload.component';

@NgModule({
  declarations: [
    ImageUploadComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ImageUploadComponent
  ],
})
export class ImageUploadModule {
  constructor(){ }
}
