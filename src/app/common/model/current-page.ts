import {prop} from '@rxweb/reactive-form-validators';

export class CurrentPage {
  @prop()
  page:number = 0;

  @prop()
  size:number = 0;

  public constructor(o?: Partial<CurrentPage>) {
    Object.assign(this, o);
  }
}

