import trialDivision from "./trialDivision";

function primalityTest(testFunction) {
  expect(testFunction(1)).toBe(false);
  expect(testFunction(2)).toBe(true);
  expect(testFunction(3)).toBe(true);
  expect(testFunction(5)).toBe(true);
  expect(testFunction(11)).toBe(true);
  expect(testFunction(191)).toBe(true);

  expect(testFunction(-1)).toBe(false);
  expect(testFunction(0)).toBe(false);

  expect(testFunction(0.5)).toBe(false);
}

describe("trialDivision", () => {
  it("detect prime numbers", () => {
    primalityTest(trialDivision);
  });
});
