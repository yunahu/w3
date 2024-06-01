// a
const listApply = (list, f) => {
  const newList = [];

  for (let i = 0; i < list.length; i++) {
    newList.push(f(list[i]));
  }

  return newList;
};

// b
const cadToUsd = (cad) => 0.73 * cad;

// c
const cadsToUsds = (cads) => listApply(cads, cadToUsd);

// d
const isOdd = (x) => x % 2 === 1;
const every = (nums) =>
  nums.reduce(
    (accumulator, currentNum) => accumulator + isOdd(currentNum),
    0
  ) === nums.length;

// e
function assert(value, message) {
  if (!value) {
    throw new Error(message || "Assertion failed");
  }
}

function assertEquals(actual, expected, message) {
  if (actual != expected) {
    throw new Error(message || `Expected ${expected}, but got ${actual}`);
  }
}

function assertListEquals(actual, expected, message) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new Error(message || `Expected both arguments to be arrays`);
  }
  if (actual.length !== expected.length) {
    throw new Error(
      message ||
        `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
    );
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(
        message ||
          `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
      );
    }
  }
}

assertListEquals(
  listApply([1, 2, 3], (x) => x + 1),
  [2, 3, 4]
);
assert(every([1, 3, 5], isOdd));

// tests a
assertListEquals(
  listApply([2, 3.2, 7.5], (x) => x * 2),
  [4, 6.4, 15]
);
assertListEquals(
  listApply([1, 0.5, 3], (x) => x * 2 + 1),
  [3, 2, 7]
);

// tests b
assertEquals(cadToUsd(1), 0.73);
assertEquals(cadToUsd(2), 1.46);
assertEquals(cadToUsd(3), 2.19);

// tests c
assertListEquals(cadsToUsds([1, 2, 3]), [0.73, 1.46, 2.19]);
assertListEquals(cadsToUsds([0.5, 2.5, 3.2]), [0.365, 1.825, 2.336]);

// tests d
assert(every([7, 9, 11]), true);
assertEquals(every([7, 9, 11]), true);
assertEquals(every([2, 3, 4]), false);
