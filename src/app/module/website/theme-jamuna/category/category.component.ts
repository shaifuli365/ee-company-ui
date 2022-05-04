import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location, ViewportScroller} from '@angular/common';
import {CategoryService} from './category.service';
import {ProductDetailDto} from '../../../dto/ProductDetailDto';
import {classToObj} from '../../../../common/util/object-util';
import {removeObjFromList, uniqueObjList} from '../../../../common/util/single-collection-util';
import {WebsiteService} from '../../service/website.service';
import {BrandSetupDto} from '../../../dto/BrandSetupDto';
import {FormArray, FormBuilder} from '@angular/forms';
import {toInteger} from '../../../../common/util/type-convert-util';
import {Page} from '../../../model/page';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';
import {CurrentPage} from '../../../../common/model/current-page';
import {ResponseMessage} from '../../../model/ResponseMessage';
import {WebsiteDisplayGroupProductDetailProjection} from '../../../dto/WebsiteDisplayGroupProductDetailProjection';
import {HttpResponse} from '@angular/common/http';
import {ProductDetailSearchDto} from '../../../dto/ProductDetailSearchDto';

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

  public priceCollapse = true;

  public category: string;
  public currentPage = 1;
  public sortBy: string;
  public loader = true;

  public organizationName = '';
  public categoryName = '';

  categoryFilterFg = this.fb.group({
    selectedBrandListFa: this.fb.array([]),
    selectedColorListFa: this.fb.array([]),
    minPrice: [null, []],
    maxPrice: [null, []],
  });

  get selectedBrandListFa() {
    return this.categoryFilterFg.controls['selectedBrandListFa'] as FormArray;
  }
  get selectedColorListFa() {
    return this.categoryFilterFg.controls['selectedColorListFa'] as FormArray;
  }

  constructor(private fb:FormBuilder, private location: Location, private route: ActivatedRoute, private router: Router,
              private websiteService: WebsiteService, private viewScroller: ViewportScroller,
              public categoryService: CategoryService) {
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params:Params) => {
      // console.log(params);
      //this.brandParamNameList = params['brand'] ? params['brand'].split(',') : [];
      // this.minPrice = params['minPrice'] ? params['minPrice'] : this.minPrice;
      // this.maxPrice = params['maxPrice'] ? params['maxPrice'] : this.maxPrice;
      //this.sortBy = params['sortBy'] ? params['sortBy'] : 'ascending';
      //this.currentPage = params['page'] ? params['page'] : this.currentPage;
    });
    this.route.params.subscribe((params: Params) => {
      const list = decodeURIComponent(this.location.path()).split('/');
      this.organizationName = list[1];
      this.websiteService.getOrganizationWebAddress(location).subscribe(res => {
        this.getBrandList(res);
        this.getColorList(res);
      }, err => {});

    });
  }


  getColorList(organizationWebAddress: string) {
    this.categoryService.getBrandList<ResponseMessage<Array<BrandSetupDto>>>
    (encodeURI(organizationWebAddress)).subscribe(
      (res: HttpResponse<ResponseMessage<Array<BrandSetupDto>>>) => {
      })
  }

  getBrandList(organizationWebAddress: string){
    this.categoryService.getBrandList<ResponseMessage<Array<BrandSetupDto>>>
    (encodeURI(organizationWebAddress)).subscribe(
      (res: HttpResponse<ResponseMessage<Array<BrandSetupDto>>>) => {
        //console.log(res.body);
        if(res.body && res.body.data){
          this.brandSetupDtoList = res.body.data;
          this.brandSetupDtoList.forEach((e,i) => this.selectedBrandListFa.push(
            this.fb.group({
              id: [e.id, []],
              name: [e.name, []],
              shortName: [e.shortName, []],
              selected: [e.selected, []],
            })
          ));
        }

        /*for (const brandParamName of this.brandParamNameList) {
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
       }*/

      }, err => {});
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


  applyFilter() {

    console.log(this.categoryFilterFg.value);

    const productDetailSearchDto:ProductDetailSearchDto =new ProductDetailSearchDto(
      0,
      10,
      this.categoryFilterFg.value['selectedBrandListFa'].map(e=>e['id']),
      this.categoryFilterFg.value['selectedColorListFa'],
      this.categoryFilterFg.value['minPrice'],
      this.categoryFilterFg.value['maxPrice'],
      'organization1.com')

    /*let qp: any = { brand: this.brandSetupSltList.map(e => e.name).join(',') };
    console.log(qp);
    if (this.minPrice !== null && isNumber(this.minPrice) && this.minPrice >= 0){
      const minPrice = this.minPrice;
      qp = {...qp, minPrice};
    }
    if (this.maxPrice !== null && isNumber(this.maxPrice) && this.maxPrice >= 0){
      const maxPrice = this.maxPrice;
      qp = {...qp, maxPrice};
    }*/

    /*this.router.navigate([], {
      relativeTo: this.route,
      queryParams: qp,
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    }).finally(() => {
      this.viewScroller.setOffset([120, 120]);
      this.viewScroller.scrollToAnchor('products');
    });*/
    this.getProductDetailPaginationByFilter(productDetailSearchDto);
  }

  getProductDetailPaginationByFilter(productDetailSearchDto: ProductDetailSearchDto){

     this.categoryService.getProductDetailPaginationByFilter<ResponseMessage<Page<ProductDetailDto>>>(productDetailSearchDto)
       .subscribe((res: HttpResponse<ResponseMessage<Page<ProductDetailDto>>>) => {
         if(res.body && res.body.data){
           const t: Page<ProductDetailDto> = res.body.data;

         }
       });
  }

  submit() {
    console.log(this.categoryFilterFg.value);
  }

  page: Page<any>;
  size = '10';
  currentPageNumber: number;
  start: number;
  end: number;

  getSize():number {
    return toInteger(this.size);
  }

  onPageChange(event: PageChangedEvent): void {
    console.log(event);
    this.currentPageNumber =  event.page - 1;
    const currentPage: CurrentPage = new CurrentPage(event.page - 1, this.page.size)
  }

}
