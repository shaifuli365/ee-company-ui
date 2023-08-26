import {prop} from "@rxweb/reactive-form-validators";

export class ThemePageTypeValue {

  @prop() key: string;
  @prop() value: string;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

/** instruction: if update this please update the value in Backend enum as well */
export class ThemePageType {

  static HOME = new ThemePageTypeValue( 'HOME', 'HOME');
  static SINGLE_PRODUCT = new ThemePageTypeValue( 'SINGLE_PRODUCT', 'Single Product');
  static CATEGORY_PRODUCT = new ThemePageTypeValue( 'CATEGORY_PRODUCT', 'Category Product');

  static themeEnumList = [
    ThemePageType.HOME,
    ThemePageType.SINGLE_PRODUCT,
    ThemePageType.CATEGORY_PRODUCT,
  ];

}
