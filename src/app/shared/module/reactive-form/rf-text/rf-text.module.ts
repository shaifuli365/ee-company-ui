import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RfTextComponent} from './rf-text.component';

@NgModule({
  declarations: [RfTextComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    RfTextComponent
  ],
})
export class RfTextModule { }
