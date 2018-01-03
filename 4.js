const { sum, subtract } = require("./math");

let result, expected;

test("sum adds numbers", () => {
  result = sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  result = subtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
});

function expect(actual) {
  return {
    toBe(exptected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    }
  };
}

function test(testTitle, callback) {
  try {
    callback();
    console.log(`✓ ${testTitle}`);
  } catch (error) {
    console.error(`✕ ${testTitle}`);
    console.error(error);
  }
}
