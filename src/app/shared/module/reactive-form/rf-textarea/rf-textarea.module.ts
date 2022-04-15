import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RfTextareaComponent} from './rf-textarea.component';

@NgModule({
  declarations: [RfTextareaComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    RfTextareaComponent
  ],
})
export class RfTextareaModule { }
