import {FormControl, FormGroup} from '@angular/forms';
import {filter, map, tap} from 'rxjs/operators';
import {HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {findValueByPropFromObj} from './object-util';
import {pipe} from 'rxjs';

/**
 see all form control in console
 * */
export function printControl(form: FormGroup){
  Object.keys(form.controls)
    .forEach( control => {
      console.log(control);
    });
}

/**
 make all form control touched, pristine: false
 * */
export function makeAllControlDirty( fg: FormGroup ) {
  for ( const control of Object.keys(fg.controls) ) {
    fg.controls[control].markAsDirty();
    fg.controls[control].markAsTouched();
  }
}


/**
 set form control value from same name model property
 setFormControlValue(this.departmentFg, {name:'eee'})
 * */
export function setFormControlValue( fg: FormGroup, model: {}|object ) {
  for ( const control of Object.keys(fg.controls) ) {
    fg.controls[control].setValue(findValueByPropFromObj(model, control));
    fg.controls[control].markAsDirty();
  }
}

/**
 dynamically add form control from model object property
 addFormControlFromModelProp(this.departmentFg, {age:12})
 * */
export function addFormControlFromModelProp( fg: FormGroup, model: {}|object ) {
  for (const [key, value] of Object.entries(model)) {
    fg.addControl(key, new FormControl(value));
  }
}

export function makeAllControlInvalid(form: FormGroup){
  const invalid:any[] = [];
  const controls = form.controls;
  for (const name in controls) {
    if (controls[name].invalid) {
      invalid.push(name);
    }
  }
  console.log(invalid);
}

export function clearForm(form: FormGroup): void {
  form.reset();
  form.markAsPristine();
  form.markAsUntouched();
  form.updateValueAndValidity();
  form.clearValidators();
}

/**
 toFormData(this.fg.value)
 * */
export function toFormData<T>( formValue: T ) {
  const formData = new FormData();
  for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
  }
  return formData;
}

export function uploadProgress<T>( cb: ( progress: number ) => void ) {
  return tap(( event: HttpEvent<T> ) => {
    if ( event.type === HttpEventType.UploadProgress && event.total && event.loaded) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}



export function requiredFileType( type: string ) {
  return (control: FormControl ) => {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }
      return null;
    }
    return null;
  };
}


export function printError(type: string, fg:FormGroup ) {
  Object.keys(fg.controls).forEach(key => {
    for (const control of Object.keys(fg.controls)) {
      const controlErrors = fg.controls[control].errors;
      if (controlErrors !== null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    }
    ;
  })
}

export function toResponseBody<T>(): any {
  return pipe(
    // @ts-ignore
    filter(( event: HttpEvent<T> ) => event.type === HttpEventType.Response),
    map(( res: HttpResponse<T> ) => res.body)
  );
}


export function printAllInvalid(form: FormGroup): void {
  console.log(form.invalid);
  const invalid:any[] = [];
  const controls = form.controls;
  for (const name in controls) {
    if (controls[name].invalid) {
      invalid.push(name);
    }
  }
  console.log(invalid);
}
