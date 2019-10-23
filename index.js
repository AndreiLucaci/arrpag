const sanitizePage = (nr, max) =>
  nr <= 0 || max < 1 ? 1 : 0 < nr && nr <= max ? nr : max;

const validateIndices = (start, stop, total) => {
  return start >= 0 && start <= total && start <= stop;
};

/**
 *
 * @param {array} items - the array source of the pagination
 * @param {number} currentPage - the page that should be loaded from the array
 * @param {number} perPage - the number of items on the page
 */
const process = (items, currentPage, perPage) => {
  const totalResults = Array.isArray(items) ? items.length : 0;
  const totalPages = Math.ceil(totalResults / perPage);
  const currentPg = sanitizePage(currentPage, totalPages);

  const startIndex = (currentPg - 1) * perPage;
  const endIndex = startIndex + perPage;

  const results = validateIndices(startIndex, endIndex, totalResults)
    ? items.slice(startIndex, endIndex)
    : items;

  return {
    totalResults,
    items: results,
    pages: totalPages,
    currentPage: currentPg,
    prevPage: sanitizePage(currentPg - 1, totalPages),
    nextPage: sanitizePage(currentPg + 1, totalPages),
    perPage,
    totalCurrentResults: results.length
  };
};

const pagination = {
  paginate: process
};

module.exports = pagination;
