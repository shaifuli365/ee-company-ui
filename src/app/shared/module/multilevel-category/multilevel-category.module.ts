import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultilevelCategoryComponent} from './multilevel-category.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [
        MultilevelCategoryComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule
    ],
    providers: [],
    exports: [
        MultilevelCategoryComponent
    ],
})
export class MultilevelCategoryModule {
    constructor(){ }
}
