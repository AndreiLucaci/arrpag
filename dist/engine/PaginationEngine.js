"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginationResult_1 = require("../models/PaginationResult");
var PaginationEngine = /** @class */ (function () {
    function PaginationEngine() {
        this.sanitizePage = function (inputNumber, maximumNumber) {
            return inputNumber <= 0 || maximumNumber < 1
                ? 1
                : 0 < inputNumber && inputNumber <= maximumNumber
                    ? inputNumber
                    : maximumNumber;
        };
        this.validateIndices = function (start, stop, total) {
            return start >= 0 && start <= total && start <= stop;
        };
    }
    PaginationEngine.prototype.paginate = function (items, currentPage, perPage) {
        var totalResults = Array.isArray(items) ? items.length : 0;
        var totalPages = Math.ceil(totalResults / perPage);
        var currentPg = this.sanitizePage(currentPage, totalPages);
        var startIndex = (currentPg - 1) * perPage;
        var endIndex = startIndex + perPage;
        var results = this.validateIndices(startIndex, endIndex, totalResults)
            ? items.slice(startIndex, endIndex)
            : items;
        return new PaginationResult_1.PaginationResult(totalResults, results, totalPages, currentPg, this.sanitizePage(currentPg - 1, totalPages), this.sanitizePage(currentPg + 1, totalPages), perPage, results.length);
    };
    return PaginationEngine;
}());
exports.PaginationEngine = PaginationEngine;
