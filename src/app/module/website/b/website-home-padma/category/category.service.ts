import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith, delay } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/shared/services/crud.service';
import { Product } from 'src/app/shared/entity/product';

@Injectable()
export class CategoryService {

    public Currency = { name: 'Dollar', currency: 'USD', price: 1 };
    public Products;

    constructor(private http: HttpClient, private toastrService: ToastrService,
                private crudService: CrudService) { }

    public getProductList(): any {
        /*return this.http.get<any>('assets/data/products16.json')
          .pipe(map(data => data));*/
    }

    getBrandList(orgName): Observable<any> {
        return this.crudService.getList({orgName}, '/brandSetup/getAllByOrgName', false, false);
    }


    private get products(): Observable<Product[]> {
        this.Products = this.http.get<Product[]>('assets/data/products16.json')
          .pipe(map(data => data));

        this.Products.subscribe(next => { localStorage.products = JSON.stringify(next); });
        return this.Products = this.Products.pipe(startWith(JSON.parse(localStorage.products || '[]')));
    }

    /*public get getProducts(): Observable<Product[]> {
        return this.products;
    }

    public getProductBySlug(slug: string): Observable<Product> {
        return this.products.pipe(map(items => {
            return items.find((item: any) => {
                return item.title.replace(' ', '-') === slug;
            });
        }));
    }*/

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
                if (a.id < b.id) {
                    return -1;
                } else if (a.id > b.id) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'a-z') {
            return products.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                } else if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'z-a') {
            return products.sort((a, b) => {
                if (a.title > b.title) {
                    return -1;
                } else if (a.title < b.title) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'low') {
            return products.sort((a, b) => {
                if (a.price < b.price) {
                    return -1;
                } else if (a.price > b.price) {
                    return 1;
                }
                return 0;
            });
        } else if (payload === 'high') {
            return products.sort((a, b) => {
                if (a.price > b.price) {
                    return -1;
                } else if (a.price < b.price) {
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

}
