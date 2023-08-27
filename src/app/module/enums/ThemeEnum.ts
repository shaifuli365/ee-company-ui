import {prop} from "@rxweb/reactive-form-validators";

export class ThemeEnumValue {

  @prop() key: string;
  @prop() value: string;
  @prop() imageUrl: string;

  constructor(key: string, value: string, imageUrl: string) {
    this.key = key;
    this.value = value;
    this.imageUrl = imageUrl;
  }
}

/** instruction: if update this please update the value in Backend enum as well */
export class ThemeEnum {

  static JAMUNA = new ThemeEnumValue( 'JAMUNA', 'Jamuna', '/assets/theme_image/jamuna');
  static PADMA = new ThemeEnumValue('PADMA', 'Padma', '/assets/theme_image/padma');

  static themeEnumList:Array<ThemeEnumValue> = [
    ThemeEnum.JAMUNA,
    ThemeEnum.PADMA,
  ];

}
