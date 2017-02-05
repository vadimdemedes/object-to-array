# object-to-array [![Build Status](https://travis-ci.org/vadimdemedes/object-to-array.svg?branch=master)](https://travis-ci.org/vadimdemedes/object-to-array)

Convert object to array, where each item is an array of key & value. Useful for creating ES6 Map from a usual object.


## Installation

```
$ npm install --save object-to-array
```


## Usage

```js
const objectToArray = require('object-to-array');

const obj = {
  a: 1,
  b: 2
};

const arr = objectToArray(obj);
//=> [
//=>   ['a', 1],
//=>   ['b', 2]
//=> ]

const map = new Map(arr);
map.get('a');
//=> 1
```

## Related

- [object-to-map](https://github.com/vadimdemedes/object-to-map)


## License

MIT © [Vadim Demedes](https://vadimdemedes.com)
