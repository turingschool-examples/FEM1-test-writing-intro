var makeValentine = require('./valentines').makeValentine;
var assert = require('chai').assert;

describe('makeValentine', function() {
  it('should be a function', function() {
    assert.isFunction(makeValentine);
  });
});
