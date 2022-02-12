import {from, Observable, of} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';

/**
 * get observable
 * @param obj  : {id:1,name:'shaiful'}
 * @return example {id:1,name:'shaiful'}
 * getObservable(8).subscribe((r) => { console.log(r); });
 */
export function getObservable(v: number): Observable<any> {
    return of(v)
        .pipe(
            filter((x) => x > 5),
            map((x) => x * x)
        );
}

/**
 * chainObservable
 */
export function chainObservable(): void {
    const observableChain = Observable.create((observer) => {
        setTimeout(() => {
            observer.next(1);
            observer.complete();
        }, 2000);
    }).flatMap((result) => {
        console.log(result);
        return Observable.create((observer) => {
            setTimeout(() => {
                console.log(result);
                observer.next(result + 2);
                observer.complete();
            }, 2000);
        });
    });
    observableChain.subscribe((finalResult) => {
        console.log(finalResult);
    });
}

/**
 * promiseToObservable
 */
export function promiseToObservable(v: number): void {
    from(new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    }))
    .pipe(
        mergeMap(flag => {
            console.log(flag);
            return of(flag);
        })
    );
}

/**
 * getPromise
 */
export function getPromise(v: number): void {
    const promiseChain = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    }).then((result: number) => {
        console.log(result);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result + 2);
            }, 1000);
        });
    });
    promiseChain.then((finalResult) => {
        console.log(finalResult);
    });
}


