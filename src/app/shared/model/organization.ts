export class OrganizationDto {
  id: number = null;
  patientName: string = null;

  constructor( id: number = null, patientName: string = null) {
    this.patientName = patientName;
  }
}
