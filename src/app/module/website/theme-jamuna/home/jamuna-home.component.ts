import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryItem} from '../../../../shared/module/multilevel-category/category-item';
import {WebsiteHomeService} from '../../service/website-home.service';
import {uniqueObjList} from '../../../../common/util/single-collection-util';
import {WebsiteDisplayGroupProductDetailProjection} from '../../../dto/WebsiteDisplayGroupProductDetailProjection';
import {HttpResponse} from '@angular/common/http';
import {ResponseMessage} from '../../../model/response-message';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-jamuna-home',
  templateUrl: './jamuna-home.component.html',
  styleUrls: ['./jamuna-home.component.scss']
})
export class JamunaHomeComponent implements OnInit {

  organizationName:string = '';
  organizationWebAddress:string = '';
  menuTitleList:Array<string> = [];
  products;
  sliders = [];
  productGroupList:Array<any> = [];
  navItems: CategoryItem[] = [];
  displayGroupWithProductDetailList: Array<WebsiteDisplayGroupProductDetailProjection> = [];
  displayGroupUniqueList : Array<WebsiteDisplayGroupProductDetailProjection> = [];

  constructor( private location: Location, private toastrService: ToastrService, private router: Router,
               private websiteHomeService: WebsiteHomeService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.websiteHomeService.getOrganizationWebAddress(location).subscribe(res => {
      this.getMenuList(res);
      this.getDisplayGroupList(res);
    }, err => {});

    //this.getProductGroupList();
    //this.getProductList();
    //this.getDisplayGroupListList();
  }

  getDisplayGroupList(organizationWebAddress: string){
    this.websiteHomeService.getDisplayGroupList<ResponseMessage<Array<WebsiteDisplayGroupProductDetailProjection>>>
    (this.websiteHomeService.getEncodeURI(organizationWebAddress)).subscribe(
      (res: HttpResponse<ResponseMessage<Array<WebsiteDisplayGroupProductDetailProjection>>>) => {
        console.log(res.body);
        if(res.body && res.body.data){
          this.displayGroupWithProductDetailList = res.body.data;
        }
        this.displayGroupUniqueList = uniqueObjList(this.displayGroupWithProductDetailList, 'wdgId');
        console.log(this.displayGroupUniqueList);
      }, err => {});
  }

  getMenuList(organizationWebAddress: string){
    this.websiteHomeService.getMenuList<ResponseMessage<Array<string>>>(organizationWebAddress).subscribe(
      (res:HttpResponse<ResponseMessage<Array<string>>>) => {
        //console.log(res);
        if(res.body && res.body.data) {
          this.menuTitleList = res.body.data;
        }
      }, err => {});
  }

  /*
    getBannerList(){
      this.websiteHomeService.getBannerList(this.organizationName).subscribe(res => {
        // console.log(res);
        if (res.status === true) {
          // res.data.map(element => this.sliders.push(element));
          this.sliders = res.data;
        }
      }, err => {});
    }
  */

  getProductGroupList(){
    this.websiteHomeService.getProductGroupList(this.organizationName)
      .subscribe(res => {
        this.productGroupList = res.data;
        // console.log(this.productGroupList);
        const navItems = [];
        this.websiteHomeService.makeNavItemRecursively(this.productGroupList, navItems,this.organizationName);
        // console.log(navItems);
        this.navItems = navItems;
      }, err => {});
  }



  getProductList(){
    this.websiteHomeService.getProductList().subscribe(res => {
      this.products = res;
    }, err => {});
  }




  navClicked($event: any) {

  }

}
