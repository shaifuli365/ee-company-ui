import {getObservable, getSingleObservable} from '../util/observable-util';
import {delay, of} from 'rxjs';
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

  });

  it('test4', (done: DoneFn) => {
    of(2, 3).subscribe(value => {
      expect(value).toBe(2);
      console.log(value);
      done();
    });
  });


});
