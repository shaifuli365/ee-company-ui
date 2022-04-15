import {Component, Input, forwardRef, OnInit, Self, Optional} from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import {ValidationService} from '../../../services/validation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rf-textarea',
  templateUrl: './rf-textarea.component.html',
  styleUrls : ['./rf-textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RfTextareaComponent),
    multi: true
  }]
})
export class RfTextareaComponent implements  OnInit, ControlValueAccessor{

  @Input() rows = 3;
  @Input() label = '';
  @Input() disabled: boolean;
  @Input() placeholder = '';

  @Input() formControlName: string;
  parentForm: FormGroup;
  value: string;
  data: any;
  control: AbstractControl;
  required = false;
  errorWithMessage = [];

  propagateChange = (_: any) => { };
  propagateTouch = (_: any) => { };

  constructor(private controlContainer: ControlContainer) {  }

  ngOnInit() {
    if (this.label === ''){
      this.label = this.camelCaseToText(this.formControlName);
    }

    this.parentForm = this.controlContainer.control as FormGroup;
    this.control = this.parentForm.get(this.formControlName);
    this.required = this.hasRequiredField(this.control);
    if (!this.control) {
      throw new Error('Form Field input component must be a part of a form group');
    }
  }

  private setError() {
    this.errorWithMessage = [];
    if (this.control.errors){
      for (const [key, value] of Object.entries(this.control.errors)) {
        this.errorWithMessage.push(ValidationService.getValidatorErrorMessage(key, value));
      }
    }
  }

  camelCaseToText(text: string){
    const result = text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
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

  /*on change we can propagate the events to the registered handlers,  which should set the form field errors
  and at the end we can check the reference to the control for those errors to display the error messages*/
  public onChange(event) {
    this.data = event ? event.target.value : this.data;
    this.propagateChange(this.data);
    this.propagateTouch(this.data);
    this.setError();
  }

  writeValue(obj: any): void {
    this.data = obj;
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }


}
