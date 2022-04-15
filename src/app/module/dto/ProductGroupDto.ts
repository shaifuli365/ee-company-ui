export class ProductGroupDto {
  id: number|null = null;
  patientName: string|null = null;

  constructor( id: number|null = null, patientName: string|null = null) {
    this.patientName = patientName;
  }
}
