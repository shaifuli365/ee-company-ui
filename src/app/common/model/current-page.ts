import {prop} from '@rxweb/reactive-form-validators';

export class CurrentPage {
  @prop()
  page:number;

  @prop()
  size:number = 10;


  constructor(page: number, size: number) {
    this.page = page;
    this.size = size;
  }
}

