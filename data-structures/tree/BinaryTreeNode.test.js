import BinaryTreeNode from "./BinaryTreeNode";

describe("BinaryTreeNode", () => {
  it("create node", () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(2);
    const rootNode = new BinaryTreeNode(3);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.value).toBe(3);
    expect(rootNode.left.value).toBe(1);
    expect(rootNode.right.value).toBe(2);
    expect(rightNode.parent.value).toBe(3);
    expect(leftNode.parent.value).toBe(3);
    expect(rootNode.right.parent).toEqual(rootNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 3, 2]);
    expect(rootNode.toString()).toBe("1,3,2");
  });
});
