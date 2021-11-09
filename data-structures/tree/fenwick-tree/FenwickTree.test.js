import FenwickTree from "./FenwickTree";

describe("FenwickTree", () => {
  it("create empty empty fenwick tree", () => {
    const tree = new FenwickTree(5);
    expect(tree.treeArray.length).toBe(6);
  });

  it("increase test", () => {
    const tree = new FenwickTree(11);

    expect(tree.treeArray).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    tree.increase(1, 3);
    expect(tree.treeArray).toEqual([0, 3, 3, 0, 3, 0, 0, 0, 3, 0, 0, 0]);
    tree.increase(2, 2);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      0,
      3 + 2,
      0,
      0,
      0,
      3 + 2,
      0,
      0,
      0,
    ]);
    tree.increase(3, -1);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1,
      0,
      0,
      0,
      3 + 2 - 1,
      0,
      0,
      0,
    ]);
    tree.increase(4, 6);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1 + 6,
      0,
      0,
      0,
      3 + 2 - 1 + 6,
      0,
      0,
      0,
    ]);
    tree.increase(5, 5);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1 + 6,
      5,
      5,
      0,
      3 + 2 - 1 + 6 + 5,
      0,
      0,
      0,
    ]);
    tree.increase(6, 4);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1 + 6,
      5,
      5 + 4,
      0,
      3 + 2 - 1 + 6 + 5 + 4,
      0,
      0,
      0,
    ]);
    tree.increase(7, -3);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1 + 6,
      5,
      5 + 4,
      -3,
      3 + 2 - 1 + 6 + 5 + 4 - 3,
      0,
      0,
      0,
    ]);
    tree.increase(8, 3);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1 + 6,
      5,
      5 + 4,
      -3,
      3 + 2 - 1 + 6 + 5 + 4 - 3 + 3,
      0,
      0,
      0,
    ]);
    tree.increase(9, 7);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1 + 6,
      5,
      5 + 4,
      -3,
      3 + 2 - 1 + 6 + 5 + 4 - 3 + 3,
      7,
      7,
      0,
    ]);
    tree.increase(10, 2);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1 + 6,
      5,
      5 + 4,
      -3,
      3 + 2 - 1 + 6 + 5 + 4 - 3 + 3,
      7,
      7 + 2,
      0,
    ]);
    tree.increase(11, 3);
    expect(tree.treeArray).toEqual([
      0,
      3,
      3 + 2,
      -1,
      3 + 2 - 1 + 6,
      5,
      5 + 4,
      -3,
      3 + 2 - 1 + 6 + 5 + 4 - 3 + 3,
      7,
      7 + 2,
      3,
    ]);
  });

  it("query test", () => {
    const inputArray = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3];

    const tree = new FenwickTree(inputArray.length);

    inputArray.forEach((value, index) => {
      tree.increase(index + 1, value);
    });

    expect(tree.query(1)).toBe(3);
    expect(tree.query(2)).toBe(3 + 2);
    expect(tree.query(3)).toBe(3 + 2 - 1);
    expect(tree.query(4)).toBe(3 + 2 - 1 + 6);
    expect(tree.query(5)).toBe(15);
    expect(tree.query(6)).toBe(19);
    expect(tree.query(7)).toBe(16);
    expect(tree.query(8)).toBe(19);
    expect(tree.query(9)).toBe(26);
    expect(tree.query(10)).toBe(28);
    expect(tree.query(11)).toBe(31);
  });

  it("queryRange test", () => {
    const inputArray = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3];

    const tree = new FenwickTree(inputArray.length);

    inputArray.forEach((value, index) => {
      tree.increase(index + 1, value);
    });

    expect(tree.queryRange(1, 1)).toBe(3);
    expect(tree.queryRange(1, 2)).toBe(5);
    expect(tree.queryRange(2, 4)).toBe(7);
    expect(tree.queryRange(6, 9)).toBe(11);
  });
});
