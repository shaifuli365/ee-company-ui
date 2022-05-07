import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductBoxComponent} from './product-box.component';
import {MatIconModule} from '@angular/material/icon';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {TruncatePipeModule} from '../../pipes/truncate/truncate-pipe.module';

@NgModule({
  declarations: [
    ProductBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    TruncatePipeModule
  ],
  exports: [
    ProductBoxComponent
  ],
  providers: []
})
export class ProductBoxModule { }
