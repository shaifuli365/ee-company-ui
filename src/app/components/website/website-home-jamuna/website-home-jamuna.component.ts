import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {uniqueList} from '../../../shared/util/collection-util';
import {CategoryItem} from '../../../shared/module/multilevel-category/category-item';
import {WebsiteHomeJamunaService} from './website-home-jamuna.service';

@Component({
  selector: 'app-website-home',
  templateUrl: './website-home-jamuna.component.html',
  styleUrls: ['./website-home-jamuna.component.scss']
})
export class WebsiteHomeJamunaComponent implements OnInit {
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
               private modalService: NgbModal, private websiteHomeService: WebsiteHomeJamunaService,
               private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {});
    this.activatedRoute.params.subscribe((params: Params) => {
      this.organizationName = params.orgName;
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
    this.websiteHomeService.getMenuList(organizationName).subscribe(res => {
      console.log(this.menuTitleList);
      this.menuTitleList = res.data;
    }, err => {});
  }

  getBannerList(){
    this.websiteHomeService.getBannerList(this.organizationName).subscribe(res => {
      // console.log(res);
      if (res.status === true) {
        // res.data.map(element => this.sliders.push(element));
        this.sliders = res.data;
      }
    }, err => {});
  }

  getProductGroupList(){
    this.websiteHomeService.getProductGroupList(this.organizationName)
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
    this.websiteHomeService.getProductList().subscribe(res => {
      this.products = res;
    }, err => {});
  }

  getDisplayGroupListList(){
    this.websiteHomeService.getDisplayGroupListList(this.organizationName).subscribe(res => {
      this.displayGroupWithProductDetailList = res.data;
      this.displayGroupUniqueList = uniqueList(this.displayGroupWithProductDetailList, 'wdgId');
    }, err => {});
  }

  getEncodeURI(name: any) {
    return encodeURI(name);
  }

  navClicked($event: any) {

  }
}
