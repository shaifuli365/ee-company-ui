export class Page {
  content: any[] = [];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable = new Pageable();
  size: number;
  sort: string;
  totalElements: number;
  totalPages: number;
}

export class Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

