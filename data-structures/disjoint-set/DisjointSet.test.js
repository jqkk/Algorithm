import DisjointSet from "./DisjointSet";

describe("DisjointSet", () => {
  it("do basic manipulations on disjoint set", () => {
    const disjointSet = new DisjointSet();

    expect(disjointSet.find("A")).toBeNull();

    disjointSet.makeSet("A");
    disjointSet.makeSet("B");

    expect(disjointSet.find("A")).toBe("A");
    expect(disjointSet.find("B")).toBe("B");

    disjointSet.makeSet("C");

    expect(disjointSet.inSameSet("A", "B")).toBe(false);

    disjointSet.union("A", "B");

    expect(disjointSet.find("B")).toBe("A");
    expect(disjointSEt.inSameSet("A", "B")).toBe(true);

    disjointSEt.union("B", "C");

    expect(disjointSEt.inSameSet("A", "C")).toBe(true);
  });
});
