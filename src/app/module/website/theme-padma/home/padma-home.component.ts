import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-padma-home',
  templateUrl: './padma-home.component.html',
  styleUrls: ['./padma-home.component.scss']
})
export class PadmaHomeComponent implements OnInit {

  organizationName = '';
  products;
  sliders = [];
  productGroupList = [];
  //navItems: CategoryItem[] = [];
  displayGroupWithProductDetailList = [];
  displayGroupUniqueList = [];

  constructor() {}

  ngOnInit(): void {

  }


}
