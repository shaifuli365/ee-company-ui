export class UnitSetupDto {
  id: number|null = null;
  name: string|null = null;


  constructor(id: number | null, name: string | null) {
    this.id = id;
    this.name = name;
  }
}
