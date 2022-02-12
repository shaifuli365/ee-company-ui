import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { ProductService } from './misc/product.service';
import {Product} from '../entity/product';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class Resolver implements Resolve<Product> {

  constructor(private http: HttpClient) {}

  // Resolver
  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.getProduct('').subscribe(product => {

    });
    return [];
  }

  public getProduct(slug: string): Observable<Product> {
    return this.http.get<Product[]>('assets/data/products16.json')
      .pipe(map(data => data))
      .pipe(startWith(JSON.parse(localStorage.products || '[]')))
      .pipe(map(items => {
      return items.find((item: any) => {
        return item.title.replace(' ', '-') === slug;
      });
    }));
  }
}
