var assert = require('assert')
var even_or_odd = require('../src/code_war')

describe('Array', function () {
  describe('#even_or_odd()', function () {
    it('even_or_odd', function () {
      assert.equal(even_or_odd(2), "Even");
      assert.equal(even_or_odd(7), "Odd");
      assert.equal(even_or_odd(-42), "Even");
      assert.equal(even_or_odd(-7), "Odd");
      assert.equal(even_or_odd(0), "Even");
    });
  });
});
