import {Component, OnInit} from '@angular/core';
import {CategoryItem} from '../../../../shared/module/multilevel-category/category-item';

@Component({
  selector: 'app-jamuna-layout',
  template: `<!--jamuna layout-->
    <app-jamuna-header></app-jamuna-header>
    <app-jamuna-home></app-jamuna-home>
    <app-jamuna-footer></app-jamuna-footer>
  `
})
export class JamunaLayoutComponent implements OnInit {

 /* organizationName = '';
  products;
  sliders = [];
  productGroupList = [];
  navItems: CategoryItem[] = [];
  displayGroupWithProductDetailList = [];
  displayGroupUniqueList = [];*/

  constructor() {}

  ngOnInit(): void {

  }


}
