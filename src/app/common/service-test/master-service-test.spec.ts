import {MasterService} from './service/master-service';
import {ValueService} from './service/value-service';

describe('Test crud service', () => {

  let masterService: MasterService;
  let service: ValueService;

  beforeEach(() => {
    service = new ValueService();
    masterService = new MasterService(new ValueService());
  });

  it('#getValue should return faked value from a fake object', () => {
    const mock =  { getValue: () => 'mock value' };
    masterService = new MasterService(mock as ValueService);
    expect(masterService.getValue()).toBe('mock value');
  });

  it('#getValue should return stubbed value from a spy', () => {

    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getValue())
      .withContext('service returned stub value')
      .toBe(stubValue);

    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1);

    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });


});



