import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HeaderOneComponent} from './header-one.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    declarations: [
        HeaderOneComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule
    ],
    exports: [
        HeaderOneComponent
    ],
    providers: []
})
export class HeaderOneModule { }
