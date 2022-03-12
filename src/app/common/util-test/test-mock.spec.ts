import {getObservable, getSingleObservable} from '../util/observable-util';
import {delay} from 'rxjs';
import {map, tap} from 'rxjs/operators';

describe('Test observable util', () => {

  beforeEach(() => { });

  it('test1', () => {
    expect(1).toEqual(1);
  });

  it('test2', (done: DoneFn) => {
    getSingleObservable().subscribe(
      (result: Array<string>) => {
        console.log(result);
        expect(result.length).toBe(2);
        done();
      });
  });

  it('test3', (done: DoneFn) => {
    getObservable()
      .pipe(
        delay(1000),
        //tap(console.log),
        map(n => n > 3 ? 'big' : 'small')
      )
      .subscribe(value => {
        console.log('value is: ',value);
        expect(value).toBe('small');

        /*setTimeout(() => {
          console.log('value after waiting: ',value);
          expect(value).toBe('small');
          done();
        }, 2000);*/

      });

    /*getObservable().subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });*/

  });

});
