import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeViewInsertComponent} from './tree-view-insert.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    TreeViewInsertComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  exports: [
    TreeViewInsertComponent
  ],
})
export class TreeViewInsertModule {
  constructor(){ }
}
