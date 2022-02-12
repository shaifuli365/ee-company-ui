import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncatePipe} from './truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    TruncatePipe
  ],
})
export class TruncatePipeModule {
  constructor(){ }
}
