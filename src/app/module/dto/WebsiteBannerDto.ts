import {OrganizationDto} from './OrganizationDto';

export class WebsiteBannerDto {

  id:number|null;

  title:string|null;
  description:string|null;
  bannerRootPath:string|null;
  bannerRelativePath:string|null;
  bannerNameWithExt:string|null;

  organization:OrganizationDto|null;

  organizationId:number|null;

  bannerUrl:string|null;


  constructor(id: number | null, title: string | null, description: string | null,
              bannerRootPath: string | null, bannerRelativePath: string | null,
              bannerNameWithExt: string | null, organization: OrganizationDto | null,
              organizationId: number | null, bannerUrl: string | null) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.bannerRootPath = bannerRootPath;
    this.bannerRelativePath = bannerRelativePath;
    this.bannerNameWithExt = bannerNameWithExt;
    this.organization = organization;
    this.organizationId = organizationId;
    this.bannerUrl = bannerUrl;
  }
}
