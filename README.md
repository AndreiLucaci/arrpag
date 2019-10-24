[![Build Status](https://travis-ci.org/AndreiLucaci/arrpag.svg?branch=master)](https://travis-ci.org/AndreiLucaci/arrpag)

[![GitHub issues](https://img.shields.io/github/issues/AndreiLucaci/simple-pagination)](https://github.com/AndreiLucaci/arrpag/issues)
[![GitHub forks](https://img.shields.io/github/forks/AndreiLucaci/simple-pagination)](https://github.com/AndreiLucaci/arrpag/network)
[![GitHub stars](https://img.shields.io/github/stars/AndreiLucaci/simple-pagination)](https://github.com/AndreiLucaci/arrpag/stargazers)
[![GitHub license](https://img.shields.io/github/license/AndreiLucaci/simple-pagination)](https://github.com/AndreiLucaci/arrpag/blob/master/LICENSE)

# simple-pagination

Simple pagination module for arrays.

# Usage

## 1. Instalation

```sh
npm install arrpag --save
yarn add arrpag
bower install arrpag --save
```

## 2. Return object

The `return object` is an object of this format:

```typescript
/**
 * @property currentPage - the current page - number
 * @property nextPage - the next page - number
 * @property prevPage - the previous page - number
 * @property perPage - number of elements per page
 * @property pages - total number of available pages
 * @property results - the paginated sub-array from the given array
 * @property totalCurrentResults - total number of current paginated items
 * @property totalResults - total number of results -> should be the initial array lengt
 */
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
```

## 3. Usage

### Javascript

```javascript
const paginator = require("arrpag");

// ...

const arr = [1, 2, 3, 4, 5];

const paginationResult = paginator.paginate(arr, 2, 3);
```

### Typescript

```typescript
import { paginate } from "arrapg";

// ...

const arr = [1, 2, 3, 4, 5];

const paginationResult = paginate(arr, 2, 3);
```

### AMD

```javascript
define(function(require, exports, module) {
  var paginate = require("arrpag");
});
```

For the previous example the output should be:

```sh
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

## 4. Test

```sh
npm run test
```
