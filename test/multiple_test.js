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
    it('oddOrEven', function () {
      assert.strictEqual(func.oddOrEven([0]), 'even');
      assert.strictEqual(func.oddOrEven([1]), 'odd');
      assert.strictEqual(func.oddOrEven([]), 'even');
      assert.strictEqual(func.oddOrEven([0, 1, 5]), 'even');
      assert.strictEqual(func.oddOrEven([0, 1, 3]), 'even');
      assert.strictEqual(func.oddOrEven([1023, 1, 2]), 'even');
    });
  });
});
