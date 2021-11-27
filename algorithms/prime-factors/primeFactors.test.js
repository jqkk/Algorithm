import primeFactors from "./primeFactors";

describe("primeFactors", () => {
  it("find prime factors", () => {
    expect(primeFactors(14)).toEqual([2, 7]);
    expect(primeFactors(40)).toEqual([2, 2, 2, 5]);
    expect(primeFactors(100)).toEqual([2, 2, 5, 5]);
  });
});
