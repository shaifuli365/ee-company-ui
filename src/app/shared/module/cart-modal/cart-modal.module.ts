import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {CartModalComponent} from './cart-modal.component';



@NgModule({
    declarations: [
        CartModalComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxSkeletonLoaderModule,
    ],
    exports: [
        CartModalComponent
    ],
    providers: []
})
export class CartModalModule { }
