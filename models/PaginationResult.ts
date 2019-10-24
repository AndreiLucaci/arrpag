/**
 * @property currentPage - the current page - number
 * @property nextPage - the next page - number
 * @property prevPage - the previous page - number
 * @property perPage - number of elements per page
 * @property pages - total number of available pages
 * @property results - the paginated sub-array from the given array
 * @property totalCurrentResults - total number of current paginated items
 * @property totalResults - total number of results -> should be the initial array lengt
 */
export interface IPaginationResult {
  totalResults: number;
  results: any[];
  pages: number;
  currentPage: number;
  prevPage: number;
  nextPage: number;
  perPage: number;
  totalCurrentResults: number;
}

export class PaginationResult implements IPaginationResult {
  public totalResults: number;
  public results: any[];
  public pages: number;
  public currentPage: number;
  public prevPage: number;
  public nextPage: number;
  public perPage: number;
  public totalCurrentResults: number;

  public constructor(
    totalResults: number = 0,
    results: any[] = [],
    pages: number = 0,
    currentPage: number = 0,
    prevPage: number = 0,
    nextPage: number = 0,
    perPage: number = 0,
    totalCurrentResults: number = 0
  ) {
    this.currentPage = currentPage;
    this.totalCurrentResults = totalCurrentResults;
    this.totalResults = totalResults;
    this.results = results;
    this.pages = pages;
    this.prevPage = prevPage;
    this.nextPage = nextPage;
    this.perPage = perPage;
  }
}
