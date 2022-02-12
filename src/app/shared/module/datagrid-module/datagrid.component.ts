import {Component, Input, OnInit, Output, ViewChild, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import {ShowUpdateDeleteComponent} from './show-update-delete/show-update-delete.component';
import {Page} from '../../model/page';
import {HttpParams} from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-grid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit, OnChanges {

  @Input() page: Page;
  @Input() columnDefs = [];
  @Input()  frameworkComponents = { btnCellRenderer: ShowUpdateDeleteComponent };
  gridApi;
  gridColumnApi;
  showPagination = true;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  @Output() getPage = new EventEmitter();

  /*paginationNumberFormatter(params){
      return '{' + params.value.toLocaleString() + '}';
    }*/
  content: any[];
  currentPage: number;
  size: number;
  totalElements: number;
  begSerial: number;
  endSerial: number;

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes.page);
    this.size = this.page.size;
    this.totalElements = this.page.totalElements;
    this.content = this.page.content;
    this.begSerial = this.page.content.length > 0 ? (this.page.number * this.page.size) + 1 : 0;
    this.endSerial = (this.page.number * this.page.size) + this.page.content.length;
    // console.log(this.currentPage);
  }

  /*onPageChange(event: PageChangedEvent): void {
    this.getPage.emit({page: event.page, size: event.itemsPerPage});
  }*/

  onPageChange(event: PageChangedEvent): void {
    this.currentPage =  event.page - 1;
    const t = event.page - 1;
    const params = new HttpParams()
      .set('page', t.toString())
      .set('size', '3');
    this.getPage.emit(params);
  }

  ngOnInit(): void {
    const params = new HttpParams().set('page', '0').set('size', '3');
    this.getPage.emit(params);
    if (this.columnDefs === undefined || this.columnDefs === null){
      console.log('col is undefined');
      this.columnDefs = [
        {headerName: 'Action', editable: false, colId: 'action', width: 130},
        {headerName: 'Id', field: 'id', editable: false, colId: 'id', width: 100 , sortable: true, filter: true},
        {headerName: 'Name', field: 'name', editable: false, colId: 'name', width: 150, filter: true},
      ];
    }
  }

  /*const selectedNodes = this.agGrid.api.getSelectedNodes();
   const selectedData = selectedNodes.map(node => node.data );*/

  onGridReady($event: any) {
    this.gridApi = $event.api;
    this.gridColumnApi = $event.columnApi;
  }

  onRowClicked(e: any) {
    console.log(e);
    /*if (e.event.target !== undefined) {
      const actionType = e.event.target.getAttribute('data-action-type');
      if (actionType === 'update') {console.log('update'); }
      if (actionType === 'delete') {console.log('delete'); }
    }
    if (e.event.target !== undefined && e.event.target.getAttribute('data-action-type') &&
      e.event.target.getAttribute('data-action-type').indexOf('update') > -1) {
      console.log(e.data);
    }*/
  }

  /*goToPage(n: number) {
    this.gridApi.paginationGoToPage(n);
  }*/

  onPageSizeChanged(e: any) {
    console.log(e);
  }

}
