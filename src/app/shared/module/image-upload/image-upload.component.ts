import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';
import {CrudService} from '../../services/crud.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-file',
  templateUrl: './image-upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ImageUploadComponent,
      multi: true
    }
  ],
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName;
  @Input() progress = 0;
  @Input() label;
  @Input() mode: 'save' | 'update' = 'save';
  @Input() updateImgSrc = '';
  onChange;
  file: File | null = null;
  control: AbstractControl;
  parentForm: FormGroup;
  required;
  errorWithMessage = [];
  url: any;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.onChange(file);
    this.file = file;
    this.setError();
  }

  constructor(private host: ElementRef<HTMLInputElement>,
              private controlContainer: ControlContainer,
              private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.parentForm = this.controlContainer.control as FormGroup;
    this.control = this.parentForm.get(this.formControlName);

    this.required = this.hasRequiredField(this.control);
    if (!this.control) {
      throw new Error('File Field input component must be a part of a form group');
    }
  }

  writeValue( value: null ) {
    console.log(value);
    this.host.nativeElement.value = '';
    this.file = null;
    if (value === null){
      this.clearImage();
    }
    if (value !== null){
      this.url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(value));
    }
  }

  registerOnChange( fn ) {
    this.onChange = fn;
  }

  registerOnTouched( fn ) {}

  /*hasError( field: string, error: string ) {
    return this.control.dirty && this.control.hasError(error);
  }*/
  private setError() {
    this.errorWithMessage = [];
    if (this.control.errors){
      for (const [key, value] of Object.entries(this.control.errors)) {
        this.errorWithMessage.push(ValidationService.getValidatorErrorMessage(key, value));
      }
    }
  }

  public hasRequiredField(abstractControl: AbstractControl): boolean{
    if (abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    return false;
  }

  onChoose(event: any){
    if (event.target.files.length === 0) {
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    this.renderImage(event.target.files[0]);
  }

  renderImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      this.url = reader.result;
    };
  }

  clearImage() {
    this.url = null;
  }

}
