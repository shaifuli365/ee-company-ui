import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JamunaLayoutComponent} from './jamuna-layout.component';
import {JamunaHomeComponent} from '../home/jamuna-home.component';
import {JamunaFooterComponent} from '../footer/jamuna-footer.component';
import {JamunaHeaderComponent} from '../header/jamuna-header.component';

@NgModule({
  declarations: [
    JamunaLayoutComponent,
    JamunaHomeComponent,
    JamunaHeaderComponent,
    JamunaFooterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class JamunaLayoutModule {}
