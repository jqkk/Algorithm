import DisjointSetItem from "./DisjointSetItem";

describe("DisjointSetItem", () => {
  it("do basic manipulation with disjoint set item", () => {
    const itemA = new DisjointSetItem("A");
    const itemB = new DisjointSetItem("B");
    const itemC = new DisjointSetItem("C");
    const itemD = new DisjointSetItem("D");

    expect(itemA.getRank()).toBe(0);
    expect(itemA.getChildren()).toEqual([]);
    expect(itemA.getKey()).toBe("A");
    expect(itemA.getRoot()).toEqual(itemA);
    expect(itemA.isRoot()).toBe(true);

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getRank()).toBe(1);
    expect(itemC.getRank()).toBe(1);

    expect(itemB.getRoot()).toBe(itemA);
    expect(itemD.getRoot()).toBe(itemC);
  });
  it("do basic manipulation with disjoint set item(2)", () => {
    const keyExtractor = (value) => {
      return value.key;
    };

    const itemA = new DisjointSetItem({ key: "A", value: 1 }, keyExtractor);
    const itemB = new DisjointSetItem({ key: "B", value: 2 }, keyExtractor);
    const itemC = new DisjointSetItem({ key: "C", value: 3 }, keyExtractor);
    const itemD = new DisjointSetItem({ key: "D", value: 4 }, keyExtractor);

    expect(itemA.getKey()).toBe("A");

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getRank()).toBe(1);

    itemA.addChild(itemC);

    expect(itemA.getChildren()).toEqual([itemB, itemC]);

    expect(itemA.getRank()).toEqual(3);
  });
});
