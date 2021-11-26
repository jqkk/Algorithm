import fibonacci from "./fibonacciNth";

describe("fibonacciNth", () => {
  it("calculate fibonacci", () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(5)).toBe(5);
  });
});
