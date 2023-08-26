import {prop} from "@rxweb/reactive-form-validators";

export class ThemeEnumValue {

  @prop() key: string;
  @prop() value: string;

  /*public constructor(o?: Partial<ThemeEnumValue>) {
    Object.assign(this, o);
  }*/

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

/** instruction: if update this please update the value in Backend enum as well */
export class ThemeEnum {

  static JAMUNA = new ThemeEnumValue( 'JAMUNA', 'Jamuna');
  static PADMA = new ThemeEnumValue('PADMA', 'Padma');

  static themeEnumList = [
    ThemeEnum.JAMUNA,
    ThemeEnum.PADMA,
  ];

}
