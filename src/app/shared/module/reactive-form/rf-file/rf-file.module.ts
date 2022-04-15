import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RfFileComponent} from './rf-file.component';

@NgModule({
  declarations: [
    RfFileComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    RfFileComponent
  ],
})
export class RfFileModule {
  constructor(){ }
}
