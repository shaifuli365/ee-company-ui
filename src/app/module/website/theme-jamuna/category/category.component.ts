import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location, ViewportScroller} from '@angular/common';
import {CategoryService} from './category.service';
import {ProductDetailDto} from '../../../dto/ProductDetailDto';
import {addPropToObj, classToObj} from '../../../../common/util/object-util';
import {isNumber} from '../../../../common/util/type-check-util';
import {addPropInListOfObj, removeObjFromList} from '../../../../common/util/single-collection-util';
import {WebsiteService} from '../../service/website.service';
import {BrandSetupDto} from '../../../dto/BrandSetupDto';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  public grid = 'col-xl-3 col-md-6';
  public layoutView = 'grid-view';
  public productDetail;
  public productDetailList:Array<ProductDetailDto> = [];

  public brandSetupDtoList: BrandSetupDto[] = [];
  public brandSetupSltList: any[] = [];
  public brandParamNameList: string[] = [];
  public brandCollapse = true;

  public minPrice: number|null = null;
  public maxPrice: number|null = null;
  public priceCollapse = true;

  public category: string;
  public currentPage = 1;
  public sortBy: string;
  public loader = true;

  public organizationName = '';
  public categoryName = '';

  constructor(private location: Location, private route: ActivatedRoute, private router: Router,
              private websiteService: WebsiteService,
              private viewScroller: ViewportScroller, public categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:Params) => {
      // console.log(params);
      this.brandParamNameList = params['brand'] ? params['brand'].split(',') : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : this.minPrice;
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : this.maxPrice;
      this.sortBy = params['sortBy'] ? params['sortBy'] : 'ascending';
      this.currentPage = params['page'] ? params['page'] : this.currentPage;
    });
    this.route.params.subscribe((params: Params) => {
      const list = decodeURIComponent(this.location.path()).split('/');
      this.organizationName = list[1];
      this.websiteService.getOrganizationWebAddress(location).subscribe(res => {
        this.getBrandList(res);
      }, err => {});

    });
    this.getProductByFilter(2);
  }

  getBrandList(orgName){
    this.categoryService.getBrandList(orgName)
      .subscribe((res:Array<BrandSetupDto>) => {
        this.brandSetupDtoList = res;

        for (const brandParamName of this.brandParamNameList) {
          const t:BrandSetupDto|null = this.brandSetupDtoList.find( bsd => bsd.name === brandParamName)?? null ;
          t ?  this.brandSetupSltList.push(t) : null;

          this.brandSetupDtoList = this.brandSetupDtoList.map(bsd => {
            if (bsd.name === brandParamName){
              bsd.selected=true;
              return bsd;
            }else{
              return bsd;
            }
          });
        }
      });
  }

  sortByFilter(value) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sortBy: value ? value : null},
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products');
    });
  }

  // Change to Grid Layout
  updateGridLayout(value: string) {
    this.grid = value;
  }

  // Change to Layout View
  updateLayoutView(value: string) {
    this.layoutView = value;
    if (value === 'list-view') {
      this.grid = 'col-lg-12';
    }
    else {
      this.grid = 'col-xl-3 col-md-6';
    }
  }

  showProduct(product){
    this.router.navigate(['/' + this.organizationName + '/' + this.categoryName + '/' + product.title ]);
  }

  applyBrandFilter(event, obj) {
    if (event.target.checked) {
      /*if (!isInList(this.brandSetupSltList, obj, 'id' )){
        this.brandSetupSltList.push(obj);
      }*/
      this.brandSetupSltList.push(obj);
    }
    else {
      /*if (isInList(this.brandSetupSltList, obj, 'id' )){
        this.brandSetupSltList = removeObjFromList(this.brandSetupSltList, obj, 'id' );
      }*/
      this.brandSetupSltList = removeObjFromList(this.brandSetupSltList, obj, 'id' );
    }
    // console.log(this.brandSetupSltList);
  }

  applyFilter() {
    let qp: any = { brand: this.brandSetupSltList.map(e => e.name).join(',') };
    console.log(qp);
    if (this.minPrice !== null && isNumber(this.minPrice) && this.minPrice >= 0){
      const minPrice = this.minPrice;
      qp = {...qp, minPrice};
    }
    if (this.maxPrice !== null && isNumber(this.maxPrice) && this.maxPrice >= 0){
      const maxPrice = this.maxPrice;
      qp = {...qp, maxPrice};
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: qp,
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products');
    });
    this.getProductByFilter(2);
  }

  getProductByFilter(filter){

    this.productDetailList = [
      classToObj(ProductDetailDto, {id: '1', seoTitle: 'shirt 1', seoUrl: 'shirt-1', size: 'small'}),
      classToObj(ProductDetailDto, {id: '2', seoTitle: 'shirt 2', seoUrl: 'shirt 2', size: 'medium'}),
      classToObj(ProductDetailDto, {id: '3', seoTitle: 'shirt 3', seoUrl: 'shirt 3', size: 'large'}),
    ]
    /* this.categoryService.getProductList()
       .subscribe(response => {
         this.productDetailList = response;
       });*/
  }

}
