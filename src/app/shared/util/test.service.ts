import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {sleep} from './mix-util';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor() { }


    getObservableValue(a, b): Observable<any> {
        return new Observable(subscriber => {
            subscriber.next(a);
            // sleep(2);
            //subscriber.next(b);
            subscriber.complete();
        });
    }


    testObservable(): void {
        const observable = new Observable(subscriber => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            setTimeout(() => {
                subscriber.next(4);
                subscriber.complete();
            }, 1000);
        });

        console.log('just before subscribe');
        observable.subscribe({
            next(x) { console.log('got value ' + x); },
            error(err) { console.error('something wrong occurred: ' + err); },
            complete() { console.log('done'); }
        });
        console.log('just after subscribe');

        sleep(10000);
    }


}

