import {TestService} from './test.service';
import {listToCommaSeparatedString, uniqueList} from './collection-util';
import {addPropToObj, objIteration} from './object-util';

describe('Util Function Test', () => {
    let service: TestService;
    beforeEach(() => { service = new TestService(); });

    /*it('#getObservableValue should return value from observable',
        (done: DoneFn) => {
            service.getObservableValue(2, 3).subscribe(value => {
                expect(value).toBe(2);
                console.log(value);
                done();
            });
        });*/

    it('#listToCommaSeparatedString test', () => {
        const str = listToCommaSeparatedString(['abc', 'def' , 2], null);
        // console.log(str);
        expect(str).toBe('abc,def,2');
    });


    it('#addPropToObj test', () => {
        const obj = addPropToObj({id: 1, name: 'shaiful'}, 'city' , 'tangail');
        expect(obj).toEqual({id: 1, name: 'shaiful', city: 'tangail'});
    });
    it('#objIteration test', () => {
        objIteration({id: 1, name: 'shaiful'});
        expect(1).toEqual(1);
    });

    it('#uniqueList test', () => {
        const list = uniqueList([{id: 1, name: 'shaiful'}, {id: 2, name: 'ferdous'}, {id: 1, name: 'shaiful'}], 'id');
        expect(list).toEqual([{id: 1 , name: 'shaiful'}, {id: 2, name: 'ferdous'}]);
    });

});
