import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextAreaComponent} from './input-textarea.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [InputTextAreaComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    InputTextAreaComponent
  ],
})
export class InputTextAreaModule { }
