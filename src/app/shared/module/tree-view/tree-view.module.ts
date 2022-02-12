import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeViewComponent} from './tree-view.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    TreeViewComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  exports: [
    TreeViewComponent
  ],
})
export class TreeViewModule {
  constructor(){ }
}
