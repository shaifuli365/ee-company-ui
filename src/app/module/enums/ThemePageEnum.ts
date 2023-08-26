import {prop} from "@rxweb/reactive-form-validators";
import {ThemeEnum} from "./ThemeEnum";
import {ThemePageType} from "./ThemePageType";

export class ThemePageEnumValue {

  @prop() key: string;
  @prop() value: string;
  @prop() themeEnum: ThemeEnum;
  @prop() themePageType: ThemePageType;

  /*public constructor(o?: Partial<ThemePageEnumValue>) {
    Object.assign(this, o);
  }*/

  constructor(key: string, value: string, themeEnum: ThemeEnum, themePageType: ThemePageType) {
    this.key = key;
    this.value = value;
    this.themeEnum = themeEnum;
    this.themePageType = themePageType;
  }
}

/** instruction: if update this please update the value in Backend enum as well */
export class ThemePageEnum {

  static JAMUNA_INDEX_1 = new ThemePageEnumValue('JAMUNA_INDEX_1', 'JAMUNA_INDEX_1', ThemeEnum.JAMUNA, ThemePageType.INDEX);
  static JAMUNA_SINGLE_PRODUCT_1 = new ThemePageEnumValue('JAMUNA_SINGLE_PRODUCT_1', 'JAMUNA_SINGLE_PRODUCT_1', ThemeEnum.JAMUNA, ThemePageType.INDEX);
  static JAMUNA_SINGLE_PRODUCT_2 = new ThemePageEnumValue('JAMUNA_SINGLE_PRODUCT_2', 'JAMUNA_SINGLE_PRODUCT_2', ThemeEnum.JAMUNA, ThemePageType.INDEX);
  static JAMUNA_CATEGORY_1 = new ThemePageEnumValue('JAMUNA_CATEGORY_1', 'JAMUNA_CATEGORY_1', ThemeEnum.JAMUNA, ThemePageType.INDEX);
  static JAMUNA_CATEGORY_2 = new ThemePageEnumValue('JAMUNA_CATEGORY_2', 'JAMUNA_CATEGORY_2', ThemeEnum.JAMUNA, ThemePageType.INDEX);

  static themeEnumList = [
    ThemePageEnum.JAMUNA_INDEX_1,
    ThemePageEnum.JAMUNA_SINGLE_PRODUCT_1,
    ThemePageEnum.JAMUNA_SINGLE_PRODUCT_2,
    ThemePageEnum.JAMUNA_CATEGORY_1,
    ThemePageEnum.JAMUNA_CATEGORY_2,
  ];

}
