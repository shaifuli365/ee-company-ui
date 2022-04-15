import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductBoxComponent} from './product-box.component';
import {MatIconModule} from '@angular/material/icon';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    ProductBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    ProductBoxComponent
  ],
  providers: []
})
export class ProductBoxModule { }
