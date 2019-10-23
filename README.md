[![GitHub issues](https://img.shields.io/github/issues/AndreiLucaci/simple-pagination)](https://github.com/AndreiLucaci/simple-pagination/issues)
[![GitHub forks](https://img.shields.io/github/forks/AndreiLucaci/simple-pagination)](https://github.com/AndreiLucaci/simple-pagination/network)
[![GitHub stars](https://img.shields.io/github/stars/AndreiLucaci/simple-pagination)](https://github.com/AndreiLucaci/simple-pagination/stargazers)
[![GitHub license](https://img.shields.io/github/license/AndreiLucaci/simple-pagination)](https://github.com/AndreiLucaci/simple-pagination/blob/master/LICENSE)

# simple-pagination

Simple pagination module for arrays.

# Usage

## 1. Install the package

```js
npm install arr-pag
```

## 2. Return object

The `return object` is an object of this format:

```json
{
  "currentPage": "the current page - number",
  "nextPage": "the next page - number",
  "prevPage": "the previous page - number",

  "perPage": "number of elements per page",
  "pages": "total number of available pages",

  "items": "the paginated sub-array from the given array",
  "totalCurrentResults": "total number of current paginated items",
  "totalResults": "total number of results -> should be the initial array length"
}
```

## 3. Example

```js
const paginator = require("arr-pag");

// ...

const arr = [1, 2, 3, 4, 5];

const paginationResult = paginator.paginate(arr, 2, 3);
```

For the previous example the output should be:

```js
{
  totalResults: 5,
  items: [ 4, 5 ],
  pages: 2,
  currentPage: 2,
  prevPage: 1,
  nextPage: 2,
  perPage: 3,
  totalCurrentResults: 2
}
```
