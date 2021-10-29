import BinarySearchTree from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  it("create binary search tree", () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeDefined();
    expect(bst.root.value).toBeNull();
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
  });

  it("insert values", () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    //root노드의 value값 설정
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe("5,10,20");
  });

  it("remove nodes", () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.toString()).toBe("5,10,20");

    const removed1 = bst.remove(5);
    expect(bst.toString()).toBe("10,20");
    expect(removed1).toBe(true);
  });

  it("contain test", () => {
    const bst = new BinarySearchTree();

    bst.insert(10);
    bst.insert(20);
    bst.insert(5);

    expect(bst.contains(20)).toBe(true);
    expect(bst.contains(40)).toBe(false);
  });

  it("sorting test", () => {
    const bst = new BinarySearchTree();

    bst.insert(2);
    bst.insert(5);
    bst.insert(4);
    bst.insert(6);
    bst.insert(9);
    bst.insert(7);
    bst.insert(1);
    bst.insert(3);
    bst.insert(8);

    expect(bst.toString()).toBe("1,2,3,4,5,6,7,8,9");
  });
});
