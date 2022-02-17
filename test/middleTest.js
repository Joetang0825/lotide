


/*
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle(['abc', 'bcd', 'def', 'efg']), ['bcd', 'def']);
*/

const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [1, 2, 3, 4, 5] for [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [1, 2, 3, 4] for [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [1, 2] for []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns ['abc', 'bcd', 'def', 'efg'] for ['bcd', 'def']", () => {
    assert.deepEqual(middle(['abc', 'bcd', 'def', 'efg']), ['bcd', 'def']);
  });

});