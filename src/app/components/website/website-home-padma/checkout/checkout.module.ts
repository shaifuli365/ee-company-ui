import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPayPalModule} from 'ngx-paypal';
import {Ng5SliderModule} from 'ng5-slider';

import {CheckoutComponent} from './checkout.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        NgxPayPalModule,
        Ng5SliderModule,
        RouterModule.forChild([
            {path: '', component: CheckoutComponent},
        ]),
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class CheckoutModule { }
