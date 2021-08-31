import { roll } from "./../src/pigdice.js";

describe("roll", () => {

  test("should display a random number between 1 and 6", () => {
    const value = roll();
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThanOrEqual(6);
  });
});
