import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DatagridComponent} from './datagrid.component';
import {AgGridModule} from 'ag-grid-angular';
import {BootstrapIconsModule} from 'ng-bootstrap-icons';
import {BoxArrowUpRight, Eye, PencilSquare, QuestionCircle, Trash} from 'ng-bootstrap-icons/icons';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';
import {ShowUpdateDeleteComponent} from './show-update-delete/show-update-delete.component';

const icons = {Trash, Eye, QuestionCircle, PencilSquare , BoxArrowUpRight};
@NgModule({
  declarations: [
    DatagridComponent,
    ShowUpdateDeleteComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([ShowUpdateDeleteComponent]),
    BootstrapIconsModule.pick(icons),
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  exports: [
    DatagridComponent,
    ShowUpdateDeleteComponent,
    BootstrapIconsModule,
  ],
})
export class DatagridModule {
  constructor(){ }
}
