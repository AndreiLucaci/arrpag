import { IPaginationResult, PaginationResult } from "../models/PaginationResult";
export interface IPaginationEngine {
    /**
     *
     * @param items - the array source of the pagination
     * @param currentPage - the page that should be loaded from the array
     * @param perPage - the number of items on the page
     */
    paginate(items: any[], currentPage: number, perPage: number): IPaginationResult;
}
export declare class PaginationEngine implements IPaginationEngine {
    paginate(items: any[], currentPage: number, perPage: number): PaginationResult;
    private sanitizePage;
    private validateIndices;
}
