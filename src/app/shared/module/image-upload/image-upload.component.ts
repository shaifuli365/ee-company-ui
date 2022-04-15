import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {hasRequiredField} from '../../util/form-util';

@Component({
  selector: 'image-upload',
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
export class ImageUploadComponent implements OnInit  {
  @Input() formControlName;
  @Input() label;
  @Input() updateImgSrc = '';
  @Input() uploadUrl = '';
  @Input() required = false;

  progress = 0;

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
  }

  constructor(private host: ElementRef<HTMLInputElement>,
              private controlContainer: ControlContainer,
              private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.parentForm = this.controlContainer.control as FormGroup;
    this.control = this.parentForm.get(this.formControlName);
    this.required = hasRequiredField(this.control);
  }

  onChange(file:File){

  }

  /*hasError( field: string, error: string ) {
    return this.control.dirty && this.control.hasError(error);
  }*/

  writeValue( value: null ) {}
  registerOnChange(fn: ()=>{} ) {}
  registerOnTouched(fn: ()=>{} ) {}


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
