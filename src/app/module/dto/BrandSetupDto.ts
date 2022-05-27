import {OrganizationDto} from './OrganizationDto';

export class BrandSetupDto {

  id: number|null = null;
  name: string|null = null;
  shortName: string|null = null;
  selected: boolean|null = false;

  logoNameWithExt:string;
  logoUrl:string;

  organization: OrganizationDto;
  organizationId:number;


  constructor(id: number | null, name: string | null, shortName: string | null, selected: boolean | null,
              logoNameWithExt: string, logoUrl: string, organization: OrganizationDto, organizationId: number) {
    this.id = id;
    this.name = name;
    this.shortName = shortName;
    this.selected = selected;
    this.logoNameWithExt = logoNameWithExt;
    this.logoUrl = logoUrl;
    this.organization = organization;
    this.organizationId = organizationId;
  }
}
