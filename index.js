const sanitizePage = (nr, max) =>
  nr <= 0 || max < 1 ? 1 : 0 < nr && nr <= max ? nr : max;

const validateIndices = (start, stop, total) => {
  return start >= 0 && start <= total && start <= stop;
};

const process = (items, currPg, perPage) => {
  const totalResults = Array.isArray(items) ? items.length : 0;
  const totalPages = Math.ceil(totalResults / perPage);
  const currentPage = sanitizePage(currPg, totalPages);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const results = validateIndices(startIndex, endIndex, totalResults)
    ? items.slice(startIndex, endIndex)
    : items;

  return {
    totalResults,
    items: results,
    pages: totalPages,
    currentPage,
    prevPage: sanitizePage(currentPage - 1, totalPages),
    nextPage: sanitizePage(currentPage + 1, totalPages),
    perPage,
    totalCurrentResults: results.length
  };
};

const pagination = {
  paginate: (arr, page, perPage) => process(arr, page, perPage)
};

module.exports = pagination;
