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

  it("remove child node", () => {
    const leftNode = new BinaryTreeNode(1);
    const rightNode = new BinaryTreeNode(2);
    const rootNode = new BinaryTreeNode(3);

    rootNode.setLeft(leftNode).setRight(rightNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 3, 2]);

    expect(rootNode.removeChild(rootNode.left)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([3, 2]);

    expect(rootNode.removeChild(rootNode.right)).toBe(true);
    expect(rootNode.traverseInOrder()).toEqual([3]);

    expect(rootNode.removeChild(rootNode.left)).toBe(false);
  });

  it("replace child node", () => {
    const rootNode = new BinaryTreeNode(3);

    rootNode.setLeft(new BinaryTreeNode(1)).setRight(new BinaryTreeNode(2));

    expect(rootNode.traverseInOrder()).toEqual([1, 3, 2]);

    const replacementNode = new BinaryTreeNode(5);
    rootNode.right.setRight(replacementNode);

    expect(rootNode.traverseInOrder()).toEqual([1, 3, 2, 5]);

    expect(rootNode.replaceChild(rootNode.right, rootNode.right.right)).toBe(
      true
    );
    expect(rootNode.right.value).toBe(5);
    expect(rootNode.right.right).toBeNull();
    expect(rootNode.traverseInOrder()).toEqual([1, 3, 5]);
  });
});
