"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaginationEngine_1 = require("./engine/PaginationEngine");
/**
 *
 * @param items - the array source of the pagination
 * @param page - the page that should be loaded from the array
 * @param perPage - the number of items on the page
 * @returns {IPaginationResult} pagination result
 */
function paginate(items, page, perPage) {
    var paginationEngine = new PaginationEngine_1.PaginationEngine();
    return paginationEngine.paginate(items, page, perPage);
}
exports.paginate = paginate;
