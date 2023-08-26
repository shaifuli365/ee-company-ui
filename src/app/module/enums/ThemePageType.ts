import {prop} from "@rxweb/reactive-form-validators";

export class ThemePageTypeValue {

  @prop() key: string;
  @prop() value: string;

  /*public constructor(o?: Partial<ThemePageTypeValue>) {
    Object.assign(this, o);
  }*/


  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

/** instruction: if update this please update the value in Backend enum as well */
export class ThemePageType {

  static INDEX = new ThemePageTypeValue( 'INDEX', 'Index');
  static CATEGORY = new ThemePageTypeValue( 'CATEGORY', 'Category');
  static SINGLE_PRODUCT = new ThemePageTypeValue( 'SINGLE_PRODUCT', 'Single Product');

  static themeEnumList = [
    ThemePageType.INDEX,
    ThemePageType.CATEGORY,
    ThemePageType.SINGLE_PRODUCT,
  ];

}
