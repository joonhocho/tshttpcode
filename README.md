# tshttpcode
HTTP Status Code enum in TypeScript optimized for tree shaking

[![npm version](https://badge.fury.io/js/tshttpcode.svg)](https://badge.fury.io/js/tshttpcode)
[![npm](https://img.shields.io/npm/dw/tshttpcode.svg)](https://www.npmjs.com/package/tshttpcode)
![npm type definitions](https://img.shields.io/npm/types/tshttpcode.svg)
[![Build Status](https://travis-ci.org/joonhocho/tshttpcode.svg?branch=master)](https://travis-ci.org/joonhocho/tshttpcode)
[![Dependency Status](https://david-dm.org/joonhocho/tshttpcode.svg)](https://david-dm.org/joonhocho/tshttpcode)
[![GitHub](https://img.shields.io/github/license/joonhocho/tshttpcode.svg)](https://github.com/joonhocho/tshttpcode/blob/master/LICENSE)

## Get Started
```
npm install -D tshttpcode
```
or
```
yarn add -D tshttpcode
```

## How to Use
```typescript
import { getHttpStatus, HttpStatus, NOT_FOUND } from 'tshttpcode';

NOT_FOUND // { code: 404, name: 'NOT_FOUND', text: 'Not Found' }

HttpStatus[404] === NOT_FOUND

HttpStatus.NOT_FOUND === NOT_FOUND

HttpStatus.BAD_STATUS_NAME === undefined // typescript error

getHttpStatus(404) === NOT_FOUND

getHttpStatus(9000) === undefined // typescript error

getHttpStatus('NOT_FOUND') === NOT_FOUND

getHttpStatus(' not  found ') === NOT_FOUND
```

## License
[MIT License](https://github.com/joonhocho/tshttpcode/blob/master/LICENSE)
