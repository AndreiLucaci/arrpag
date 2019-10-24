const assert = require("assert");

const paginationModule = require("../dist/index");

const createArray = nr => [...Array(nr)].map(_ => 0);

describe("simple array pagination", () => {
  it("should be equal: 25, 0, 10", () => {
    assert.deepEqual(paginationModule.paginate(createArray(25), 0, 10), {
      totalResults: 25,
      results: createArray(10),
      pages: 3,
      currentPage: 1,
      prevPage: 1,
      nextPage: 2,
      perPage: 10,
      totalCurrentResults: 10
    });
  });
  it("should be equal: 25, 1, 10", () => {
    assert.deepEqual(paginationModule.paginate(createArray(25), 1, 10), {
      totalResults: 25,
      results: createArray(10),
      pages: 3,
      currentPage: 1,
      prevPage: 1,
      nextPage: 2,
      perPage: 10,
      totalCurrentResults: 10
    });
  });
  it("should be equal: 25, 2, 10", () => {
    assert.deepEqual(paginationModule.paginate(createArray(25), 2, 10), {
      totalResults: 25,
      results: createArray(10),
      pages: 3,
      currentPage: 2,
      prevPage: 1,
      nextPage: 3,
      perPage: 10,
      totalCurrentResults: 10
    });
  });
  it("should be equal: 25, 3, 10", () => {
    assert.deepEqual(paginationModule.paginate(createArray(25), 3, 10), {
      totalResults: 25,
      results: createArray(5),
      pages: 3,
      currentPage: 3,
      prevPage: 2,
      nextPage: 3,
      perPage: 10,
      totalCurrentResults: 5
    });
  });
  it("should be equal: 0, 0, 10", () => {
    assert.deepEqual(paginationModule.paginate(createArray(0), 0, 10), {
      totalResults: 0,
      results: createArray(0),
      pages: 0,
      currentPage: 1,
      prevPage: 1,
      nextPage: 1,
      perPage: 10,
      totalCurrentResults: 0
    });
  });
  it("should be equal: 5, 2, 10", () => {
    assert.deepEqual(paginationModule.paginate(createArray(5), 2, 10), {
      totalResults: 5,
      results: createArray(5),
      pages: 1,
      currentPage: 1,
      prevPage: 1,
      nextPage: 1,
      perPage: 10,
      totalCurrentResults: 5
    });
  });
  it("should be equal: 5, 2, 3", () => {
    assert.deepEqual(paginationModule.paginate([1, 2, 3, 4, 5], 2, 3), {
      totalResults: 5,
      results: [4, 5],
      pages: 2,
      currentPage: 2,
      prevPage: 1,
      nextPage: 2,
      perPage: 3,
      totalCurrentResults: 2
    });
  });
  it("should be equal: 7, 2, 2", () => {
    assert.deepEqual(paginationModule.paginate([1, 2, 3, 4, 5, 6, 7], 2, 2), {
      totalResults: 7,
      results: [3, 4],
      pages: 4,
      currentPage: 2,
      prevPage: 1,
      nextPage: 3,
      perPage: 2,
      totalCurrentResults: 2
    });
  });
});
