import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CategoryItem} from '../../../../shared/module/multilevel-category/category-item';
import {JamunaService} from '../layout/jamuna.service';
import {uniqueObjList} from '../../../../common/util/single-collection-util';


@Component({
  selector: 'app-jamuna-home',
  templateUrl: './jamuna-home.component.html',
  styleUrls: ['./jamuna-home.component.scss']
})
export class JamunaHomeComponent implements OnInit {

  menuTitleList = [];
  organizationName = '';
  products;
  sliders = [];
  productGroupList = [];
  navItems: CategoryItem[] = [];
  displayGroupWithProductDetailList = [];
  displayGroupUniqueList = [];
  menuName;
  constructor( private location: Location, private toastrService: ToastrService, private router: Router,
               private janumaService: JamunaService,
               private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {});
    this.activatedRoute.params.subscribe((params: Params) => {
      this.organizationName = params['orgName'];
    });
    const list = decodeURIComponent(this.location.path()).split('/');
    this.organizationName = list[1];
    this.menuName = list[2];
    this.getMenuList(list[1]);
    this.getBannerList();
    this.getProductGroupList();
    this.getProductList();
    this.getDisplayGroupListList();
  }

  getMenuList(organizationName){
    this.janumaService.getMenuList(organizationName).subscribe(res => {
      console.log(this.menuTitleList);
      this.menuTitleList = res.data;
    }, err => {});
  }

  getBannerList(){
    this.janumaService.getBannerList(this.organizationName).subscribe(res => {
      // console.log(res);
      if (res.status === true) {
        // res.data.map(element => this.sliders.push(element));
        this.sliders = res.data;
      }
    }, err => {});
  }

  getProductGroupList(){
    this.janumaService.getProductGroupList(this.organizationName)
      .subscribe(res => {
        this.productGroupList = res.data;
        // console.log(this.productGroupList);
        const navItems = [];
        this.makeNavItemRecursively(this.productGroupList, navItems);
        // console.log(navItems);
        this.navItems = navItems;
      }, err => {});
  }

  makeNavItemRecursively(pgList, navItems){
    console.dir(pgList);
    for (let i = 0; i < pgList.length; i++) {
      navItems[i] = {
        displayName: pgList[i].name,
        iconName: 'insert_chart_outlined',
        route: this.getEncodeURI(this.organizationName) + '/category/' + this.getEncodeURI(pgList[i].name),
        children: []
      };
      if (pgList[i].productGroupChildList.length > 0){
        this.makeNavItemRecursively(pgList[i].productGroupChildList, navItems[i].children);
      }
    }
  }

  getProductList(){
    this.janumaService.getProductList().subscribe(res => {
      this.products = res;
    }, err => {});
  }

  getDisplayGroupListList(){
    this.janumaService.getDisplayGroupListList(this.organizationName).subscribe(res => {
      this.displayGroupWithProductDetailList = res.data;
      this.displayGroupUniqueList = uniqueObjList(this.displayGroupWithProductDetailList, 'wdgId');
    }, err => {});
  }

  getEncodeURI(name: any) {
    return encodeURI(name);
  }

  navClicked($event: any) {

  }

}
