import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location, ViewportScroller} from '@angular/common';
import {CategoryService} from './category.service';
import {ProductDetailDto} from '../../../dto/ProductDetailDto';


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

  public brandSetupList: any[] = [];
  public brandSetupSltList: any[] = [];
  public brandSetupSltParamNameList: string[] = [];
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
              private viewScroller: ViewportScroller, public categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // console.log(params);
      this.brandSetupSltParamNameList = params.brand ? params.brand.split(',') : [];
      this.minPrice = params.minPrice ? params.minPrice : this.minPrice;
      this.maxPrice = params.maxPrice ? params.maxPrice : this.maxPrice;
      this.sortBy = params.sortBy ? params.sortBy : 'ascending';
      this.currentPage = params.page ? params.page : this.currentPage;
    });
    this.route.params.subscribe((params: Params) => {
      const list = decodeURIComponent(this.location.path()).split('/');
      this.organizationName = list[1];
      //this.getBrandList(list[1]);
    });
    this.getProductByFilter(2);
  }

  /* getBrandList(orgName){
     this.categoryService.getBrandList(orgName)
       .subscribe(res => {
         this.brandSetupList = res.data;
         this.brandSetupList = this.brandSetupList.map(obj => ({ ...obj, selected : false }));
         // filter according to param
         for (const brandSetupSltParamName of this.brandSetupSltParamNameList) {
           const t = this.brandSetupList.find( bc => bc.name === brandSetupSltParamName );
           if (t !== null && t !== undefined ){
             this.brandSetupSltList.push(t);
           }
           this.brandSetupList = this.brandSetupList.map(bs => {
             if (bs.name === brandSetupSltParamName){
               return { ...bs, selected : true };
             }else{
               return bs;
             }
           });
         }
       });
   }*/

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
      new ProductDetailDto(),
      new ProductDetailDto(),
      new ProductDetailDto()
    ]
    /*  {
        id: 1,
        seoTitle: 'awesome good apple organic',
        seoUrl : 'awesome good apple'
      } ,
      {
        id: 2,
        seoTitle: 'awesome good mango organic',
        seoUrl : 'awesome good mango'
      },
      {
        id: 3,
        seoTitle: 'awesome good orange organic',
        seoUrl : 'awesome good orange'
      }
    ];*/
    /* this.categoryService.getProductList()
       .subscribe(response => {
         this.productDetailList = response;
       });*/
  }

}
