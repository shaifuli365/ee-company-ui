import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {filter, map, tap} from 'rxjs/operators';
import {HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {pipe} from 'rxjs';

export function formAllControls(form: FormGroup){
  Object.keys(form.controls)
    .forEach( control => {
      console.log(control);
    });
}

export function allInvalid(form: FormGroup){
  const invalid = [];
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
  // form.updateValueAndValidity();
  form.clearValidators();
}

export function markAllAsDirty( form: FormGroup ) {
  for ( const control of Object.keys(form.controls) ) {
    form.controls[control].markAsDirty();
  }
}

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
    if ( event.type === HttpEventType.UploadProgress ) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter(( event: HttpEvent<T> ) => event.type === HttpEventType.Response),
    map(( res: HttpResponse<T> ) => res.body)
  );
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

export function printError(type: string ) {
  Object.keys(this.websiteDisplayGroupFg.controls).forEach(key => {
    const controlErrors: ValidationErrors = this.websiteDisplayGroupFg.get(key).errors;
    if (controlErrors != null) {
      Object.keys(controlErrors).forEach(keyError => {
        console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
      });
    }
  });
}

/*export function markAllTouched(obj1, key, val){
  Object.keys(this.f).forEach(controlName =>
      controls[controlName].markAsTouched()
  );
}*/

/*public getSantizeUrl(url: string): any {
  this.sanitizer.bypassSecurityTrustUrl('data:image/!*;base64,' + url);
}*/
