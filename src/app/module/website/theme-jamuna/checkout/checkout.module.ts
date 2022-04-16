import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckoutComponent} from './checkout.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: CheckoutComponent},
        ]),
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class CheckoutModule { }
