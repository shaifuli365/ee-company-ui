import { Component, OnDestroy } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {IAfterGuiAttachedParams} from 'ag-grid-community';

@Component({
  selector: 'app-data-grid-icon',
  templateUrl: './data-grid-icon.component.html',
  styleUrls: ['./data-grid-icon.component.scss']
})
export class DataGridIconComponent implements ICellRendererAngularComp, OnDestroy {
  private params: any;
  detailFlag = false;
  updateFlag = false;
  deleteFlag = false;
  nextFlag = false;

  agInit(params: any): void {
    this.params = params;
    if (params.detailFlag){
      this.detailFlag = params.detailFlag;
    }
    if (params.updateFlag){
      this.updateFlag = params.updateFlag;
    }
    if (params.deleteFlag){
      this.deleteFlag = params.deleteFlag;
    }
    if (params.nextFlag){
      this.nextFlag = params.nextFlag;
    }
  }
  show() {
    this.params.show(this.params);
  }
  update() {
    this.params.update(this.params);
  }
  delete() {
    this.params.delete(this.params);
  }
  next() {
    this.params.next(this.params);
  }
  ngOnDestroy() {}

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {}

  refresh(params: any): boolean {
    return false;
  }
  constructor() {}
}
