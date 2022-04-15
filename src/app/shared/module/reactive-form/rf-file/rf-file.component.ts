import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValidationService} from '../../../services/validation.service';
import {DomSanitizer} from '@angular/platform-browser';
import { hasRequiredField } from 'src/app/shared/util/form-util';

@Component({
  selector: 'rf-file',
  templateUrl: './rf-file.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RfFileComponent,
      multi: true
    }
  ],
  styleUrls: ['./rf-file.component.scss']
})
export class RfFileComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName;
  @Input() progress = 0;
  @Input() label;
  @Input() mode: 'save' | 'update' = 'save';
  @Input() updateImgSrc = '';
  @Input() uploadUrl = '';
  required = false;

  file: File | null = null;
  control: AbstractControl;
  parentForm: FormGroup;
  errorWithMessage = [];
  url: any;

  @Output() fileEmit = new EventEmitter<File>();

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
    if (!this.control) {
      throw new Error('File Field input component must be a part of a form group');
    }
    this.required = hasRequiredField(this.control);
  }

  writeValue( value: any ) {
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

  onChange(file:File){

  }

  registerOnChange(fn: ()=>{} ) {
    this.onChange = fn;
  }

  registerOnTouched(fn: ()=>{} ) {}

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

  onChoose(event: Event){
    if ((event.target as HTMLInputElement).files.length === 0) {
      return;
    }
    if ((event.target as HTMLInputElement).files
      && (event.target as HTMLInputElement).files.length
      && (event.target as HTMLInputElement).files.length > 0) {
      const file = (event.target as HTMLInputElement).files;
    }

    const mimeType = (event.target as HTMLInputElement).files[0].type;
    if (mimeType.match(/image\/*/) === null) {
      return;
    }
    this.renderImage((event.target as HTMLInputElement).files[0]);
    this.fileEmit.emit((event.target as HTMLInputElement).files[0]);

  }

  renderImage(file: File) {
    const reader:FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e:ProgressEvent<FileReader>) => {
      this.url = reader.result;
    };
  }

  clearImage() {
    this.url = null;
  }

}
