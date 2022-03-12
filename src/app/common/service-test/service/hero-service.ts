import {Injectable} from '@angular/core';
import {ValueService} from './value-service';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient) {}

  getHeroes( ): Observable<any> {
    return this.http.get(``);
  }
}
