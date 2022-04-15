import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import {Page} from '../../model/page';
import {ColDef, GridApi, GridReadyEvent} from 'ag-grid-community';
import {DataGridIconComponent} from './data-grid-icon/data-grid-icon.component';
import {CurrentPage} from '../../model/current-page';
import {toInteger} from '../../util/type-convert-util';
import {ColumnApi} from 'ag-grid-community/dist/lib/columns/columnApi';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnChanges {


  @Input() columnDefs: ColDef[];
  @Input()  frameworkComponents = { btnCellRenderer: DataGridIconComponent };
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  showPagination = true;
  @ViewChild('agGrid') agGrid: AgGridAngular;
  @Output() getPage = new EventEmitter();

  @Input() page: Page<any>;
  @Input() size = '10';
  content: any[];
  currentPageNumber: number;
  start: number;
  end: number;

  ngOnInit(): void {
    const currentPage: CurrentPage = new CurrentPage({page: 0, size: toInteger(this.size)})
    this.getPage.emit(currentPage);
    if (this.columnDefs === undefined){
      throw new Error('column definition is undefined')
    }
    if (this.columnDefs === null){
      throw new Error('column definition is null')
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.content = this.page.content;
    this.start = this.page.content.length > 0 ? (this.page.number * this.page.size) + 1 : 0;
    this.end = (this.page.number * this.page.size) + this.page.content.length;
  }

  onPageChange(event: PageChangedEvent): void {
    console.log(event);
    this.currentPageNumber =  event.page - 1;
    const currentPage: CurrentPage = new CurrentPage({page: event.page - 1, size: this.page.size})
    this.getPage.emit(currentPage);
  }



  /*const selectedNodes = this.agGrid.api.getSelectedNodes();
   const selectedData = selectedNodes.map(node => node.data );*/

  onGridReady($event: GridReadyEvent) {
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

  onPageSizeChanged(eventTarget: any) {
    console.log(eventTarget);
  }

  getSize():number {
    return toInteger(this.size);
  }

  public defaultColDef: ColDef = {
    resizable: true,
  };

  public rowSelection = 'single';
}
