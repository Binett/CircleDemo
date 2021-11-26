const sum = require("./../sum.js");

describe("Testing with Jest", () => {
  test("addition", () => {
    const sumtest = 2 + 3;
    const expectedResult = 5;
    expect(sumtest).toEqual(expectedResult);
  });

  // Jest also allows a test to run multiple
  // times using different values
  test.each([[1, 1, 2],[-1, 1, 0],[3, 2, 5],[1,6,7]])(
    "Does %i + %i equals %i", (a, b, expectedResult) => {
    expect(sum(a, b)).toBe(expectedResult);
  });
});