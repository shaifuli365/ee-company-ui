import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WebsiteHomePadmaService} from './website-home-padma.service';
import {uniqueList} from '../../../shared/util/collection-util';
import {CategoryItem} from '../../../shared/module/multilevel-category/category-item';

@Component({
  selector: 'app-website-home',
  templateUrl: './website-home-padma.component.html',
  styleUrls: ['./website-home-padma.component.scss']
})
export class WebsiteHomePadmaComponent implements OnInit {

  organizationName = '';
  products;
  sliders = [];
  productGroupList = [];
  navItems: CategoryItem[] = [];
  displayGroupWithProductDetailList = [];
  displayGroupUniqueList = [];

  constructor( private location: Location, private toastrService: ToastrService, private router: Router,
               private modalService: NgbModal, private websiteHomeService: WebsiteHomePadmaService,
               private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {});
    this.activatedRoute.params.subscribe((params: Params) => {
      this.organizationName = params.orgName;
    });
    this.getBannerList();
    this.getProductGroupList();
    this.getProductList();
    this.getDisplayGroupListList();
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
          console.log(navItems);
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
      // console.log(this.displayGroupWithProductDetailList);
      // console.log( this.displayGroupWithProductDetailList.map(item => item.websiteDisplayGroup));
      const tempList = this.displayGroupWithProductDetailList.map(item => item.websiteDisplayGroup);
      this.displayGroupUniqueList = uniqueList(tempList, 'id');
    }, err => {});
  }

  getEncodeURI(name: any) {
    return encodeURI(name);
  }

  navClicked($event: any) {

  }
}
