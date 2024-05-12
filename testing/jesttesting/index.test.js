const fizz_buzz = require("./index");

describe("FizzBuzz", () => {
  test('[3] should result in "fizz"', () => {
    // arrange
    const sut = fizz_buzz;
    const expected = "fizz";

    // actual
    const actual = sut([3]);

    // assert
    expect(actual).toBe(expected);
  });

  test('[5] should result in "buzz"', () => {
    // arrange
    const sut = fizz_buzz;
    const expected = "buzz";

    // actual
    const actual = sut([5]);

    // assert
    expect(actual).toBe(expected);
  });

  test('[15] should result in "fizzbuzz"', () => {
    // arrange
    const sut = fizz_buzz;
    const expected = "fizzbuzz";

    // actual
    const actual = sut([15]);

    // assert
    expect(actual).toBe(expected);
  });

  test('[1,2,3] should result in "1, 2, fizz"', () => {
    expect(fizz_buzz([3])).toBe("fizz");
  });
});
