import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from './input-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextComponent} from '../input-text/input-text.component';



@NgModule({
  declarations: [InputSelectComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [InputSelectComponent],
})
export class InputSelectModule { }
