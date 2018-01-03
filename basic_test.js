const actual = true;
const expected = false;
if (actual !== expected) {
  throw new Error(`${actual} is not ${expected}`);
}
