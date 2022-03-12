import {Observable, of} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {CrudService, Student} from '../service/crud.service';
import {ApiService} from '../service/api.service';

class Teacher{

  constructor(private name: string) {}

}

class MockCrudService extends CrudService{

  constructor(private apiService2: ApiService) {
    super(apiService2);
  }

  override getObject4<T>(Student:{new()}, uri:string) : Observable<T> {
    const body = new Student();
    return of(body);
  }
}

describe('Test mock crud service', () => {

  let mockCrudService: MockCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] ,
      providers: [ApiService]
    });
    mockCrudService = TestBed.inject(MockCrudService);
  });

  it('test1', (done:DoneFn) => {
    expect(1).toBe(1);
  });

});
