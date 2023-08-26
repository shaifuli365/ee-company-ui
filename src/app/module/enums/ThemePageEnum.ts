import {prop} from "@rxweb/reactive-form-validators";
import {ThemeEnum} from "./ThemeEnum";
import {ThemePageType} from "./ThemePageType";

export class ThemePageEnumValue {

  @prop() key: string;
  @prop() value: string;
  @prop() themeEnum: ThemeEnum;
  @prop() themePageType: ThemePageType;

  constructor(key: string, value: string, themeEnum: ThemeEnum, themePageType: ThemePageType) {
    this.key = key;
    this.value = value;
    this.themeEnum = themeEnum;
    this.themePageType = themePageType;
  }
}

/** instruction: if update this please update the value in Backend enum as well */
export class ThemePageEnum {

  static JAMUNA_HOME_1 = new ThemePageEnumValue('JAMUNA_HOME_1', 'JAMUNA_HOME_1',
    ThemeEnum.JAMUNA, ThemePageType.HOME);
  static JAMUNA_SINGLE_PRODUCT_1 = new ThemePageEnumValue('JAMUNA_SINGLE_PRODUCT_1', 'JAMUNA_SINGLE_PRODUCT_1',
    ThemeEnum.JAMUNA, ThemePageType.SINGLE_PRODUCT);
  static JAMUNA_SINGLE_PRODUCT_2 = new ThemePageEnumValue('JAMUNA_SINGLE_PRODUCT_2', 'JAMUNA_SINGLE_PRODUCT_2',
    ThemeEnum.JAMUNA, ThemePageType.SINGLE_PRODUCT);
  static JAMUNA_CATEGORY_PRODUCT_1 = new ThemePageEnumValue('JAMUNA_CATEGORY_PRODUCT_1', 'JAMUNA_CATEGORY_PRODUCT_1',
    ThemeEnum.JAMUNA, ThemePageType.CATEGORY_PRODUCT);
  static JAMUNA_CATEGORY_PRODUCT_2 = new ThemePageEnumValue('JAMUNA_CATEGORY_PRODUCT_2', 'JAMUNA_CATEGORY_PRODUCT_2',
    ThemeEnum.JAMUNA, ThemePageType.CATEGORY_PRODUCT);

  static themeEnumList = [
    ThemePageEnum.JAMUNA_HOME_1,
    ThemePageEnum.JAMUNA_SINGLE_PRODUCT_1,
    ThemePageEnum.JAMUNA_SINGLE_PRODUCT_2,
    ThemePageEnum.JAMUNA_CATEGORY_PRODUCT_1,
    ThemePageEnum.JAMUNA_CATEGORY_PRODUCT_2,
  ];

}
