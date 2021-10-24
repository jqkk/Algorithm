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

  it("calculate node height", () => {
    const root = new BinaryTreeNode(1);
    const left = new BinaryTreeNode(2);
    const right = new BinaryTreeNode(3);
    const grandLeft = new BinaryTreeNode(4);
    const grandRight = new BinaryTreeNode(5);
    const grandGrandLeft = new BinaryTreeNode(6);

    expect(root.height).toBe(0);
    expect(root.balanceFactor).toBe(0);

    root.setLeft(left).setRight(right);

    expect(root.height).toBe(1);
    //Math.max(1,1)
    expect(left.height).toBe(0);
    expect(root.balanceFactor).toBe(0);
    //1-1

    left.setLeft(grandLeft).setRight(grandRight);

    expect(root.traverseInOrder()).toEqual([4, 2, 5, 1, 3]);
    expect(root.height).toBe(2);
    expect(left.height).toBe(1);
    expect(root.balanceFactor).toBe(1);
    //2-1

    grandLeft.setLeft(grandGrandLeft);

    expect(root.height).toBe(3);
    expect(left.height).toBe(2);
    expect(grandLeft.height).toBe(1);
    expect(root.balanceFactor).toBe(2);

    expect(root.replaceChild(root.right, root.left)).toBe(true);
    expect(root.traverseInOrder()).toEqual([6, 4, 2, 5, 1, 6, 4, 2, 5]);
    expect(root.removeChild(root.left)).toBe(true);
    expect(root.balanceFactor).toBe(-3);
    //-3-0
  });

  it("attach meta info to the node", () => {
    const redNode = new BinaryTreeNode(1);
    const blackNode = new BinaryTreeNode(2);

    redNode.meta.set("color", "red");
    blackNode.meta.set("color", "black");

    expect(redNode.meta.get("color")).toBe("red");
    expect(blackNode.meta.get("color")).toBe("black");
  });

  it("detect uncle node", () => {
    const grandParent = new BinaryTreeNode(1);
    const parent = new BinaryTreeNode(2);
    const uncle = new BinaryTreeNode(3);
    const child = new BinaryTreeNode(4);
    const cousin = new BinaryTreeNode(5);

    grandParent.setLeft(parent);
    parent.setLeft(child);
    grandParent.setRight(uncle);
    uncle.setLeft(cousin);

    expect(grandParent.traverseInOrder()).toEqual([4, 2, 1, 5, 3]);

    expect(child.uncle).toEqual(uncle);
    expect(cousin.uncle).toEqual(parent);
  });

  it("copy node", () => {
    const root = new BinaryTreeNode();
    const left = new BinaryTreeNode(2);
    const right = new BinaryTreeNode(3);

    root.setValue(1);

    root.setLeft(left).setRight(right);

    expect(root.toString()).toBe("2,1,3");

    const newRoot = new BinaryTreeNode();
    const newLeft = new BinaryTreeNode();
    const newRight = new BinaryTreeNode();

    newRoot.setLeft(newLeft).setRight(newRight);

    expect(newRoot.toString()).toBe(",,");

    BinaryTreeNode.copyNode(root, newRoot);

    expect(newRoot.toString()).toBe("2,1,3");
  });
});
