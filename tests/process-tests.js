const assert = require("assert");

const paginationModule = require("../index");

const createArray = nr => [...Array(nr)].map(_ => 0);

describe("simple array pagination", () => {
  it("should be equal: 25, 0, 10", () => {
    assert.deepEqual(paginationModule.paginate(createArray(25), 0, 10), {
      totalResults: 25,
      items: createArray(10),
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
      items: createArray(10),
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
      items: createArray(10),
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
      items: createArray(5),
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
      items: createArray(0),
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
      items: createArray(5),
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
      items: [4, 5],
      pages: 2,
      currentPage: 2,
      prevPage: 1,
      nextPage: 2,
      perPage: 3,
      totalCurrentResults: 2
    });
  });
});
