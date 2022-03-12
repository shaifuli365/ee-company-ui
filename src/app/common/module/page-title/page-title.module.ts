import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTitleComponent} from './page-title.component';
import {WidgetModule} from '../../../shared/widget/widget.module';

@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PageTitleComponent]
})
export class PageTitleModule { }
