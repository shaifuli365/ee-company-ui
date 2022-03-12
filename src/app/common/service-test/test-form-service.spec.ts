import {DepartmentDto} from '../../module/registration/dto/department-dto';
import {FormService} from '../service/form-service';
import {TestBed} from '@angular/core/testing';
import {FormGroup} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';

describe('Test form service', () => {
  let service: FormService;

  beforeEach(() => {
    //http call
    TestBed.configureTestingModule({
      imports: [RxReactiveFormsModule] ,
      providers: [FormService]
    });
    service = TestBed.inject(FormService);
  });

  it('test1', () => {

    const departmentFg:FormGroup = service.makeBlankForm(new DepartmentDto())
    console.log(departmentFg.value);
    expect(1).toEqual(1);
  });


});
