"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginationResult = /** @class */ (function () {
    function PaginationResult(totalResults, results, pages, currentPage, prevPage, nextPage, perPage, totalCurrentResults) {
        if (totalResults === void 0) { totalResults = 0; }
        if (results === void 0) { results = []; }
        if (pages === void 0) { pages = 0; }
        if (currentPage === void 0) { currentPage = 0; }
        if (prevPage === void 0) { prevPage = 0; }
        if (nextPage === void 0) { nextPage = 0; }
        if (perPage === void 0) { perPage = 0; }
        if (totalCurrentResults === void 0) { totalCurrentResults = 0; }
        this.currentPage = currentPage;
        this.totalCurrentResults = totalCurrentResults;
        this.totalResults = totalResults;
        this.results = results;
        this.pages = pages;
        this.prevPage = prevPage;
        this.nextPage = nextPage;
        this.perPage = perPage;
    }
    return PaginationResult;
}());
exports.PaginationResult = PaginationResult;
