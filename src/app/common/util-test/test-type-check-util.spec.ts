import {isArray, onlyArray} from '../util/type-check-util';


describe('Test type check util', () => {
  /* beforeEach(() => { service = new TestService(); }); */

  it('isArray', () => {
    expect(isArray([1,2,3])).toEqual(true);
    expect(isArray({id:1})).toEqual(false);
  });

  it('onlyArray', () => {
    expect(onlyArray([1,2,3])).toEqual(true);
  });

  it('onlyArray', function() {
    expect(() => {
      onlyArray({id:1});
    }).toThrowError('only array type allowed but found other type');
  });

});
