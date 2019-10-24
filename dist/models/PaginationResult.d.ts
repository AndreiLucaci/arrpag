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
export declare class PaginationResult implements IPaginationResult {
    totalResults: number;
    results: any[];
    pages: number;
    currentPage: number;
    prevPage: number;
    nextPage: number;
    perPage: number;
    totalCurrentResults: number;
    constructor(totalResults?: number, results?: any[], pages?: number, currentPage?: number, prevPage?: number, nextPage?: number, perPage?: number, totalCurrentResults?: number);
}
