import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DebugComponent} from './debug.component';


@NgModule({
  declarations: [
    DebugComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    DebugComponent
  ],
})
export class DebugModule {
  constructor(){ }
}
