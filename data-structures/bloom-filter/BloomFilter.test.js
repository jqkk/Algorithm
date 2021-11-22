import BloomFilter from "./BloomFilter";

describe("BloomFilter", () => {
  let bloomFilter;
  const people = ["Bruce Wayne", "Clark Kent", "Barry Allen"];

  beforeEach(() => {
    bloomFilter = new BloomFilter();
  });

  it("create a new filter", () => {
    const store = bloomFilter.createStore(18);
  });

  it("3 hash function", () => {
    const str1 = "apple";

    expect(bloomFilter.hash1(str1)).toEqual(14);
    expect(bloomFilter.hash2(str1)).toEqual(43);
    expect(bloomFilter.hash3(str1)).toEqual(10);

    const str2 = "orange";

    expect(bloomFilter.hash1(str2)).toBe(0);
    expect(bloomFilter.hash2(str2)).toBe(61);
    expect(bloomFilter.hash3(str2)).toBe(10);
  });

  it("create an array with 3 hash values", () => {
    expect(bloomFilter.getHashValues("apple")).toEqual([14, 43, 10]);
  });

  it("insert values & checking for inserted values", () => {
    people.forEach((person) => bloomFilter.insert(person));

    expect(bloomFilter.mayContain("Bruce Wayne")).toBe(true);
    expect(bloomFilter.mayContain("Clark Kent")).toBe(true);
    expect(bloomFilter.mayContain("Barry Allen")).toBe(true);

    expect(bloomFilter.mayContain("Tony Stark")).toBe(false);
  });
});
