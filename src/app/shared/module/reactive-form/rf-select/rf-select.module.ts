import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RfSelectComponent} from './rf-select.component';


@NgModule({
  declarations: [RfSelectComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [RfSelectComponent],
})
export class RfSelectModule { }
