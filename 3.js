const { sum, subtract } = require("./math");

let result, expected;

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
exptected = 4;
expect(result).toBe(exptected);

function expect(actual) {
  return {
    toBe(exptected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    }
  };
}
