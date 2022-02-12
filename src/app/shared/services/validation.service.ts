import {AbstractControl, FormControl} from '@angular/forms';

export class ValidationService {

  static getValidatorErrorMessage(validatorName: string  , validatorValue?: any) {
    const config = {
      required: 'This field is required',
      twoDecimalAllowed: 'Decimal value upto 2 decimal places is allowed.',
      invalidNumber: 'Input should be an integer value',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword: 'New password and confirm password does not match',
      invalidDob: 'User must be minimum 16 Years old.',
      invalidUrl: 'Invalid URL',
      alphaNumericAllowed: 'Only apha numeric input is allowed',
      numericAllowed: 'Only numeric values are allowed',
      emailTaken: 'Email id already taken',
      minlength: `Minimum length should be ${validatorValue.requiredLength} characters`,
      maxlength: `Maximum length should be ${validatorValue.requiredLength} characters`,
      letterOnly: `only letter is allowed`,
      requiredImageType: `only image type is allowed like JPG, JPEG, PNG, GIP, WEBP`
    };


    return {errorName: validatorName, errorMessage: config[validatorName]} ;
  }


  static creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (control.value.match(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    )) {
      return null;
    } else {
      return { invalidCreditCard: true };
    }
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/   ) ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static minInt(control) {
    if (control.value.match(/[0-9]$/)) {
      return null;
    } else {
      return { invalidInteger: true };
    }
  }

  static maxInt(control) {
    if (control.value.match(/[0-9]$/)) {
      return null;
    } else {
      return { invalidInteger: true };
    }
  }

  static letterOnly(control: AbstractControl) {
    if (control.value.match(/[0-9]$/)) {
      return null;
    } else {
      return { letterOnly: true };
    }
  }

  static alphaNumericValidator(control: AbstractControl) {
    if (control.value.match(/^[a-zA-Z0-9]*$/)) {
      return null;
    } else {
      return {alphaNumericAllowed: true };
    }
  }

  static numberValidator(control: AbstractControl) {
    if (control.value.length === 0 || control.value.match(/^[0-9]*$/)) {
      return null;
    } else {
      return {numericAllowed: true };
    }
  }

  static decimalValidation(control: AbstractControl) {
    if (control.value.match(/^\d*\.?\d{0,2}$/g)) {
      return null;
    } else {
      return {twoDecimalAllowed: true };
    }
  }

  // function to validate that dob should be 18 years old
  static dobValidator(control: AbstractControl) {
    const currentDate = new Date();
    if (control.value) {
      const dob = new Date(control.value);
      const dobYear = dob.getFullYear();
      const maxDobYear = currentDate.getFullYear() - 18;
      // console.log(dobYear, maxDobYear)
      if (maxDobYear < dobYear) {
        return { invalidDob: true };
      }
      else {
        return null;
      }
    }
  }

  static urlValidator(control: AbstractControl) {
    const URL_REGEXP = /^(http?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|in|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    if (control.value.match(URL_REGEXP)) {
      return null;
    } else {
      return {invalidUrl: true };
    }
  }

  static confirmPasswordValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ invalidPassword: true });
    }
    return null;
  }

  static requiredImageType(control: AbstractControl) {
    const file = control.value;
    if (file) {
      const types = new Array('jpg', 'jpeg', 'png', 'gip', 'webp');
      const extension = file.name.split('.')[1].toLowerCase();
      if (types.indexOf(extension) === -1){
        return {
          requiredImageType: true
        };
      }
      return null;
    }
    return null;
  }
}

