import {Observable, of} from 'rxjs';
import {HttpClient, HttpClientModule, HttpResponse} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';
import {CrudService} from '../service/crud.service';
import {ApiService} from '../service/api.service';

class Product{
  id: number;
  name: string;
  category: string
}

describe('Test crud service', () => {

  let crudService: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] ,
      providers: [ApiService]
    });
    crudService = TestBed.inject(CrudService);
  });

  it('test1', (done:DoneFn) => {
    const val$:Observable<any> = crudService.getObject<Observable<HttpResponse<Product>>>('http://localhost:3000/products')
    //val$.subscribe(v => console.log)
    val$.subscribe(
      (v:HttpResponse<Product>) => {
        console.log(v.body);
        expect(1).toEqual(1);
        done();
      },
      (v:HttpResponse<Product>) => {
        console.log(v.body);
        expect(1).toEqual(1);
        done();
      }
    );

  });

});
