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

    it('getCount', function () {
      assert.strictEqual(func.getCount("abracadabra"), 5)
    });

    it("should return False for pins with length other than 4 or 6", function () {
      assert.strictEqual(func.validatePIN("1"), false, "Wrong output for '1'")
      assert.strictEqual(func.validatePIN("12"), false, "Wrong output for '12'")
      assert.strictEqual(func.validatePIN("123"), false, "Wrong output for '123'")
      assert.strictEqual(func.validatePIN("12345"), false, "Wrong output for '12345'")
      assert.strictEqual(func.validatePIN("1234567"), false, "Wrong output for '1234567'")
      assert.strictEqual(func.validatePIN("-1234"), false, "Wrong output for '-1234'")
      assert.strictEqual(func.validatePIN("1.234"), false, "Wrong output for '1.234'")
      assert.strictEqual(func.validatePIN("-1.234"), false, "Wrong output for '-1.234'")
      assert.strictEqual(func.validatePIN("00000000"), false, "Wrong output for '00000000'")
    });
    it("should return False for pins which contain characters other than digits", function () {
      assert.strictEqual(func.validatePIN("a234"), false, "Wrong output for 'a234'")
      assert.strictEqual(func.validatePIN(".234"), false, "Wrong output for '.234'")
    });
    it("should return True for valid pins", function () {
      assert.strictEqual(func.validatePIN("1234"), true, "Wrong output for '1234'");
      assert.strictEqual(func.validatePIN("0000"), true, "Wrong output for '0000'");
      assert.strictEqual(func.validatePIN("1111"), true, "Wrong output for '1111'");
      assert.strictEqual(func.validatePIN("123456"), true, "Wrong output for '123456'");
      assert.strictEqual(func.validatePIN("098765"), true, "Wrong output for '098765'");
      assert.strictEqual(func.validatePIN("000000"), true, "Wrong output for '000000'");
      assert.strictEqual(func.validatePIN("123456"), true, "Wrong output for '123456'");
      assert.strictEqual(func.validatePIN("090909"), true, "Wrong output for '090909'");
    });

    it("Tests example test cases", () => {
      assert.strictEqual(func.sumStr("4", "5"), "9");
      assert.strictEqual(func.sumStr("34", "5"), "39");
    });

    it("should work for the examples", function () {
      assert.strictEqual(func.stringToNumber("1234"), 1234)
      assert.strictEqual(func.stringToNumber("605"), 605)
      assert.strictEqual(func.stringToNumber("1405"), 1405)
      assert.strictEqual(func.stringToNumber("-7"), -7)
    });

    it("Should return \"11\"", function () {
      assert.strictEqual(func.addBinary(1, 2), "11");
    });

    it("Testing for fixed tests", () => {
      assert.strictEqual(func.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");   
    });

    it("Build a pile of Cubes", () => {
      assert.strictEqual(func.findNb(4183059834009), 2022)
      assert.strictEqual(func.findNb(24723578342962), -1)
      assert.strictEqual(func.findNb(135440716410000), 4824)
      assert.strictEqual(func.findNb(40539911473216), 3568)
    });

    it("Testing for fixed tests", () => {
      assert.strictEqual(func.busStopNumber([[10,0],[3,5],[5,8]]),5);
      assert.strictEqual(func.busStopNumber([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
      assert.strictEqual(func.busStopNumber([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
      assert.strictEqual(func.busStopNumber([[0,0]]),0);
    });
  });
});
