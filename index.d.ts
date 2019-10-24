import { IPaginationResult } from "./models/PaginationResult";

/**
 *
 * @param items - the array source of the pagination
 * @param page - the page that should be loaded from the array
 * @param perPage - the number of items on the page
 * @returns {IPaginationResult} pagination result
 */
export function paginate(
  items: any[],
  page: number,
  perPage: number
): IPaginationResult;
