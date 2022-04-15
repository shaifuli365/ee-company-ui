import {prop} from '@rxweb/reactive-form-validators';

export class CurrentPage {
  @prop()
  page:number;

  @prop()
  size:number = 10;

  public constructor(o?: Partial<CurrentPage>) {
    Object.assign(this, o);
  }
}

