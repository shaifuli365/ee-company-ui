import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultilevelNavComponent} from './multilevel-nav.component';

// material
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
    declarations: [
        MultilevelNavComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule
    ],
    providers: [],
    exports: [
        MultilevelNavComponent
    ],
})
export class MultilevelNavModule {
    constructor(){ }
}
