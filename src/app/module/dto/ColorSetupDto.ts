import {OrganizationDto} from './OrganizationDto';

export class ColorSetupDto {

  id: number|null = null;
  name: string|null = null;
  colorCode: string|null = null;

  organization: OrganizationDto;
  organizationId:number;

  constructor(id: number | null, name: string | null, colorCode: string | null,
              organization: OrganizationDto, organizationId: number) {
    this.id = id;
    this.name = name;
    this.colorCode = colorCode;
    this.organization = organization;
    this.organizationId = organizationId;
  }
}
