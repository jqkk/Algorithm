import fibonacci from "./fibonacci";

describe("fibonacci", () => {
  it("calculate fibonacci", () => {
    expect(fibonacci(1)).toEqual([1]);
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
