import {Injectable} from '@angular/core';
import {HttpClientModule, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';

export class Student{
  id: number;
  name: string;

  constructor(id: number, name: string) {

    this.id = id;
    this.name = name;
  }
}

@Injectable({
  providedIn: HttpClientModule
})
export class CrudService {

  constructor(private apiService: ApiService) { }

  getObject<T extends object>(uri:string) : Observable<Student> {
    return this.apiService.getV5<Student>(uri);
  }

  getObject2<T extends Student>(type: (new () => T), uri:string) : Observable<T> {
    const temp:T = new type();
    return this.apiService.getV5<T>(uri);
  }

  getObject3<T extends object>(uri:string) : Observable<HttpResponse<T>> {
    return this.apiService.getV4<T>(uri);
  }

  getObject4<T>(type: (new () => T), uri:string) : Observable<T> {
    return this.apiService.getV5<T>(uri);
  }




  getFile<T>(uri:string) : Observable<HttpResponse<T>> {
    return this.apiService.getV4<T>(uri);
  }

  getList<T>(uri:string) : Observable<HttpResponse<T>> {
    return this.apiService.getV4<T>(uri);
  }


}
