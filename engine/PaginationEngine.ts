import {
  IPaginationResult,
  PaginationResult
} from "../models/PaginationResult";

export interface IPaginationEngine {
  /**
   *
   * @param items - the array source of the pagination
   * @param currentPage - the page that should be loaded from the array
   * @param perPage - the number of items on the page
   */
  paginate(
    items: any[],
    currentPage: number,
    perPage: number
  ): IPaginationResult;
}

export class PaginationEngine implements IPaginationEngine {
  public paginate(items: any[], currentPage: number, perPage: number) {
    const totalResults = Array.isArray(items) ? items.length : 0;
    const totalPages = Math.ceil(totalResults / perPage);
    const currentPg = this.sanitizePage(currentPage, totalPages);

    const startIndex = (currentPg - 1) * perPage;
    const endIndex = startIndex + perPage;

    const results: any[] = this.validateIndices(
      startIndex,
      endIndex,
      totalResults
    )
      ? items.slice(startIndex, endIndex)
      : items;

    return new PaginationResult(
      totalResults,
      results,
      totalPages,
      currentPg,
      this.sanitizePage(currentPg - 1, totalPages),
      this.sanitizePage(currentPg + 1, totalPages),
      perPage,
      results.length
    );
  }

  private sanitizePage = (inputNumber: number, maximumNumber: number) =>
    inputNumber <= 0 || maximumNumber < 1
      ? 1
      : 0 < inputNumber && inputNumber <= maximumNumber
      ? inputNumber
      : maximumNumber;

  private validateIndices = (start: number, stop: number, total: number) =>
    start >= 0 && start <= total && start <= stop;
}
