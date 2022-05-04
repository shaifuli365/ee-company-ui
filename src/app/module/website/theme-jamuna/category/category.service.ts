import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {CrudService} from 'src/app/shared/services/crud.service';
import {Product} from 'src/app/shared/entity/product';
import {ProductDetailSearchDto} from '../../../dto/ProductDetailSearchDto';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class CategoryService {

    public Currency = { name: 'Dollar', currency: 'USD', price: 1 };
    public Products;

    constructor(private http: HttpClient, private toastrService: ToastrService,
                private crudService: CrudService) { }

    private get products(): Observable<Product[]> {
        this.Products = this.http.get<Product[]>('assets/data/products16.json')
          .pipe(map(data => data));

        this.Products.subscribe(next => { localStorage['products'] = JSON.stringify(next); });
        return this.Products = this.Products.pipe(startWith(JSON.parse(localStorage['products'] || '[]')));
    }

    public filterProducts(filter: any): Observable<Product[]> {
        return this.products.pipe(map(product =>
          product.filter((item: Product) => {
              if (!filter.length) { return true; }
              const Tags = filter.some((prev) => { // Match Tags
                  if (item.tags) {
                      if (item.tags.includes(prev)) {
                          return prev;
                      }
                  }
              });
              return Tags;
          })
        ));
    }

    // Sorting Filter
    public sortProducts(products: Product[], payload: string): any {
        if (payload === 'ascending') {
            return products.sort((a, b) => {
                if (a.id && b.id && a.id < b.id) {
                    return -1;
                } else if (a.id && b.id && a.id > b.id) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'a-z') {
            return products.sort((a, b) => {
                if (a.title && b.title && a.title < b.title) {
                    return -1;
                } else if (a.title && b.title && a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'z-a') {
            return products.sort((a, b) => {
                if (a.title && b.title && a.title > b.title) {
                    return -1;
                } else if (a.title && b.title  && a.title < b.title) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'low') {
            return products.sort((a, b) => {
                if (a.price && b.price && a.price < b.price) {
                    return -1;
                } else if (a.price && b.price && a.price > b.price) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'high') {
            return products.sort((a, b) => {
                if (a.price && b.price && a.price > b.price) {
                    return -1;
                } else if (a.price && b.price && a.price < b.price) {
                    return 1;
                }
                return 0;
            });
        }
    }

    public getPager(totalItems: number, currentPage: number = 1, pageSize: number = 16) {

        const totalPages = Math.ceil(totalItems / pageSize);
        const paginateRange = 3;
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage: number;
        let endPage: number;
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else if (currentPage < paginateRange - 1){
            startPage = 1;
            endPage = startPage + paginateRange - 1;
        } else {
            startPage = currentPage - 1;
            endPage =  currentPage + 1;
        }
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        return {totalItems, currentPage, pageSize, totalPages,
            startPage, endPage, startIndex, endIndex, pages};
    }

/*  getBrandList(orgName):Observable<Array<BrandSetupDto>> {

    const bs1:BrandSetupDto = classToObj(BrandSetupDto,{id:1,name:'brand 1'})
    const bs2:BrandSetupDto = classToObj(BrandSetupDto,{id:2,name:'brand 2'})
    const bs3:BrandSetupDto = classToObj(BrandSetupDto,{id:3,name:'brand 3'})
    return of([bs1,bs2,bs3]);
  }*/

  getBrandList<T extends object>(organizationWebAddress:string):Observable<HttpResponse<T>> {
    return this.crudService.get<T>( {organizationWebAddress}, '/brandSetup/getAllByOrgName', false, false);
  }

  getProductDetailPaginationByFilter<T extends object>(productDetailSearchDto: ProductDetailSearchDto):Observable<HttpResponse<T>> {

    return this.crudService.post<T>( productDetailSearchDto, '/productDetail/getProductDetailPageByFilter', false, false);
  }
}
