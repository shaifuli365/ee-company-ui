import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {LayoutBoxComponent} from './layout-box.component';

@NgModule({
    declarations: [
        LayoutBoxComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        LayoutBoxComponent
    ],
    providers: []
})
export class LayoutBoxModule { }
