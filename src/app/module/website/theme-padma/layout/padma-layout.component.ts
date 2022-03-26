import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import {CategoryItem} from '../../../../shared/module/multilevel-category/category-item';

@Component({
  selector: 'app-padma-layout',
  template: `<!--padma layout-->
  <app-padma-header></app-padma-header>
  <app-padma-home></app-padma-home>
  <app-padma-footer></app-padma-footer>
  `
})
export class PadmaLayoutComponent implements OnInit {

  organizationName = '';
  products;
  sliders = [];
  productGroupList = [];
  navItems: CategoryItem[] = [];
  displayGroupWithProductDetailList = [];
  displayGroupUniqueList = [];

  constructor() {}

  ngOnInit(): void {

  }


}
