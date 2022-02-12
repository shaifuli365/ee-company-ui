import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export function httpConvert(url, headers, params): Observable<any[]> {
  return this.http.get(`${url}/`, {headers , params})
    .pipe( map((res: any) => res.data ? res.data : []));
}


export function addHttpParam(param, prop, val): Observable<any[]> {
  return null;
}
