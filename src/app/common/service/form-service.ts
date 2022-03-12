import {Injectable} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {RxFormBuilder, RxFormGroup, RxReactiveFormsModule} from '@rxweb/reactive-form-validators';

@Injectable({
  providedIn: RxReactiveFormsModule
})
export class FormService {

  //constructor( @Optional() private rxFormBuilder:RxFormBuilder ) {}
  //constructor(@Inject(RxFormBuilder)private rxFormBuilder:RxFormBuilder ) {}
  constructor( private rxFormBuilder:RxFormBuilder) {}

  makeBlankForm<T>(modelType: T | {[key: string]: any;}) : FormGroup{
    return this.rxFormBuilder.formGroup(modelType);
  }

  makeFormWithData<T>(model: T | {[key: string]: any;}, data:any) : FormGroup{
    return this.rxFormBuilder.formGroup(model,data);
  }

  /*this.departmentFg = this.formBuilder.group({
   id: [departmentDto?.id],
   name: [ departmentDto?.departmentParentId, [Validators.minLength(3), Validators.maxLength(20)] ],
   reportHeader: [departmentDto?.reportHeader],
   departmentHead: [departmentDto?.departmentHead],
 });*/

  /* makeForm(departmentDto: DepartmentDto, editable: boolean,
            departmentFg:FormGroup, departmentFgOpt: FormGroupOption,
            rxFormBuilder:RxFormBuilder) {

     departmentFgOpt.editable = editable;
     return rxFormBuilder.formGroup(DepartmentDto);

   }*/

  //todo use service to build form
  /* test(){
      this.functionUtilService.makeForm(new DepartmentDto(),false,
        this.departmentFg, this.departmentFgOpt, this.rxFormBuilder);
   }*/
}
