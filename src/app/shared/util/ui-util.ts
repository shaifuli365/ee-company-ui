import {from, Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

export function deleteConfirm(url, msg = 'Are your sure want to delete', headers, params): Observable<any> {
  return from(this.confirmationDialogService.deleteConfirm(msg))
    .pipe(
      mergeMap(flag => {
        console.log(flag);
        if (flag){
          return this.http.delete(`${url}`, {headers, params});
        }
        return this.getErrorObservable('user declined');
      })
    );
}

export function timeout(obj){
  setTimeout(() => { console.log(''); }, 3000);
}
