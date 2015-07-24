'use strict';

/**
 * Dependencies
 */

const objectToArray = require('./');

require('chai').should();


/**
 * Tests
 */

describe ('object-to-array', function () {

  it ('convert object to array', function () {
    let obj = {
      first: 'first value',
      second: 'second value'
    };

    let arr = objectToArray(obj);

    arr.length.should.equal(2);

    arr.should.deep.equal([
      ['first', 'first value'],
      ['second', 'second value']
    ]);
  });

});
