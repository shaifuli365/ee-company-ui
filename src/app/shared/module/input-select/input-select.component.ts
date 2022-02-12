import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ValidationService} from '../../services/validation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSelectComponent),
    multi: true
  }]
})
export class InputSelectComponent implements OnInit, ControlValueAccessor {

  @Input() disabled: boolean;
  @Input() label  = '';

  @Input() objList  = []; // send object list
  @Input() showProp = 'name'; // properties to show in option text comma separated string
  propList = ['name'];  //  properties to show in option text comma separated string to string list

  @Input() eqProp  = 'id';  // which property to use to show selected object in drop down
  @Input() sltObj: any = {};

  @Input() formControlName: string;
  parentForm: FormGroup;
  value: string;
  data: any;
  control: AbstractControl;
  required = false;
  errorWithMessage = [];

  constructor(private controlContainer: ControlContainer) {  }

  ngOnInit() {
    this.propList = this.showProp.split(',');
    if (this.label === ''){
      this.label = 'Select ' + this.camelCaseToText(this.formControlName);
    }
    this.parentForm = this.controlContainer.control as FormGroup;
    this.control = this.parentForm.get(this.formControlName);
    this.required = this.hasRequiredField(this.control);
    if (!this.control) {
      throw new Error('Form Field input component must be a part of a form group');
    }
    this.control.patchValue(this.data);
  }

  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }


  selectChange($event: any) {
    // console.log($event);
    this.control.patchValue($event);
  }

  camelCaseToText(text: string){
    const result = text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  isSelected(obj: any) {
    if (this.sltObj === {}){
      return false;
    }
    else if (this.sltObj[this.eqProp] === obj[this.eqProp]){
      return true;
    }else{
      return false;
    }
  }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }

  showingOptionValues(obj: any) {
    return  this.propList.map(i => obj[i]).join('-');
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




}
