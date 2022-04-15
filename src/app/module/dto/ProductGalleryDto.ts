export class ProductGalleryDto {
  id: number|null = null;
  patientName: string|null = null;

  constructor( id: number|null = null, patientName: string|null = null) {
    this.id = id;
    this.patientName = patientName;
  }
}
