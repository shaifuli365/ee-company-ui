export class Organization {

  id: number|null = null;
  name: string|null = null;

  website: string|null = null;

  public constructor(d?: Partial<Organization>) {
    Object.assign(this, d);
  }

}



