var assert = require('assert')
var func = require('../src/export_multiple')

describe('Array', function () {
  describe('#func()', function () {
    it('getSum', function () {
      assert.strictEqual(func.getSum(0, -1), -1);
      assert.strictEqual(func.getSum(0, 1), 1);
    });
    it('greet', function () {
      assert.strictEqual(func.greet("Ryan"), "Hello, Ryan how are you doing today?");
      assert.strictEqual(func.greet("Shingles"), "Hello, Shingles how are you doing today?");
    });
  });
});
