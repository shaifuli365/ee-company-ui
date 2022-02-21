import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPayPalModule } from 'ngx-paypal';
import { Ng5SliderModule } from 'ng5-slider';
import {CartComponent} from './cart.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        NgxPayPalModule,
        Ng5SliderModule,
        RouterModule.forChild([
            {path: '', component: CartComponent},
        ]),
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class CartModule { }
