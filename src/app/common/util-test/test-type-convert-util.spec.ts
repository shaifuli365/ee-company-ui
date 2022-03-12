import {test1} from '../util/type-check-util';
import {ApiResponseCode} from '../enums/api-response-code';
import {ApiResponse} from '../model/api-response';
import {listToCommaSeparatedString} from '../util/single-collection-util';
import {addPropToObj} from '../util/object-util';

enum AnEnum {
  One = 1,
  Two = 2
}

describe('Test type convert util', () => {
  /* beforeEach(() => { service = new TestService(); }); */

  it('test1', () => {
    console.log(typeof AnEnum[AnEnum.Two]);
    console.log(AnEnum[AnEnum.Two]);
    expect(AnEnum[AnEnum.Two]).toEqual("Two");
  });

  it('test2', () => {
    const apiResponse: ApiResponse<string> =
      new ApiResponse<string>({apiResponseCode: ApiResponseCode.FETCH_DATA_SUCCESS });
    expect(ApiResponseCode.FETCH_DATA_SUCCESS).toEqual(apiResponse.apiResponseCode);
  });

  it('test3', () => {
    const b = test1({ id: 0 });
    const c = test1(['hello','world']);
    expect(true).toEqual(b);
    expect(true).toEqual(c);
  });

  it('test4', () => {
    const str = listToCommaSeparatedString(['abc', 'def' , 2], null);
    // console.log(str);
    expect(str).toBe('abc,def,2');
  });

});
