import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {QuickViewComponent} from './quick-view.component';

@NgModule({
  declarations: [
    QuickViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    QuickViewComponent
  ],
  providers: []
})
export class QuickViewModule { }
