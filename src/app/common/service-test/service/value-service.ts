import {Injectable} from '@angular/core';

@Injectable()
export class ValueService {

  constructor() { }

  getValue() {
    return 'hello';
  }

}
