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
  });
});
