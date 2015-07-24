# object-to-array [![Circle CI](https://circleci.com/gh/vdemedes/object-to-array.svg?style=svg)](https://circleci.com/gh/vdemedes/object-to-array)

Convert object to array, where each item is an array of key & value.
Useful for creating ES6 Map from a usual object.


### Installation

```
$ npm install object-to-array --save
```


### Usage

```javascript
const objectToArray = require('object-to-array');

let obj = {
  key: 'value'
};

let arr = objectToArray(obj); // [['key', 'value']]

let map = new Map(arr);

map.get('key') === 'value'; // true
```


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/object-to-array.svg?style=svg)](https://circleci.com/gh/vdemedes/object-to-array)

```
$ make test
```


### License

object-to-array is released under the MIT license.
