import AvlTree from "../avl-tree/AvlTree";

describe("AvlTree", () => {
  it("left-left rotation", () => {
    const tree = new AvlTree();

    tree.insert(4);
    tree.insert(3);
    expect(tree.root.value).toBe(4);
    tree.insert(2);
    //rotateLeftLeft()가 이루어짐
    expect(tree.toString()).toBe("2,3,4");
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(1);

    tree.insert(1);
    tree.insert(0);

    expect(tree.toString()).toBe("0,1,2,3,4");
    expect(tree.root.value).toBe(3);
    expect(tree.root.height).toBe(2);
  });

  it("right-right rotation", () => {
    const tree = new AvlTree();

    tree.insert(2);
    expect(tree.root.value).toBe(2);
    tree.insert(3);
    tree.insert(4);
    tree.insert(5);

    expect(tree.toString()).toBe("2,3,4,5");
    expect(tree.root.value).toBe(3);
  });

  it("left-right rotation", () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(20);
    tree.insert(25);

    expect(tree.root.value).toBe(25);
    expect(tree.toString()).toBe("20,25,30");
  });

  it("right-left rotation", () => {
    const tree = new AvlTree();

    tree.insert(30);
    tree.insert(40);
    tree.insert(35);

    expect(tree.root.value).toBe(35);
    expect(tree.toString()).toBe("30,35,40");
  });
});
