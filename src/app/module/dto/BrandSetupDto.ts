export class BrandSetupDto {
  id: number|null = null;
  name: string|null = null;
  shortName: string|null = null;
  selected: boolean|null = false;


  constructor(id: number | null, name: string | null, shortName: string | null, selected: boolean | null) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
    this.selected = selected;
  }
}
