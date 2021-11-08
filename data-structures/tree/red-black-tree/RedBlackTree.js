import BinarySearchTree from "../binary-search-tree/BinarySearchTree";

const RED_BLACK_TREE_COLORS = {
  red: "red",
  black: "black",
};

const COLOR_PROP_NAME = "color";

export default class RedBlackTree extends BinarySearchTree {
  insert(value) {
    const insertedNode = super.insert(value);

    if (this.nodeComparator.equal(insertedNode, this.root)) {
      //삽입된 노드가 root인 경우
      this.makeNodeBlack(insertedNode);
      //해당 노드를 검은색으로 설정
    } else {
      this.makeNodeRed(insertedNode);
      //해당 노드를 빨간색으로 설정
    }

    this.balance(insertedNode);

    return insertedNode;
  }

  remove(value) {
    throw new Error(
      `Cant't remove ${value}. Remove method is not implemented yet`
    );
  }

  balance(node) {
    if (this.nodeComparator.equal(node, this.root)) {
      //삽입된 노드가 root인 경우
      return;
    }

    if (this.isNodeBlack(node.parent)) {
      //해당 노드의 부모가 검정색인 경우
      return;
    }

    //여기서부터는 부모노드가 빨간색일 경우
    const grandParent = node.parent.parent;
    //grandParent = 해당 노드의 부모의 부모

    if (node.uncle && this.isNodeRed(node.uncle)) {
      //부모노드의 형제노드가 존재하고, 그것이 빨간색일때
      this.makeNodeBlack(node.uncle);
      this.makeNodeBlack(node.parent);
      //부모노드의 형제노드와 부모노드를 검은색으로 설정

      if (!this.nodeComparator.equal(grandParent, this.root)) {
        //grandParent 노드가 root일 경우
        this.makeNodeRed(grandParent);
        //grandParent 노드를 빨간색으로 설정
      } else {
        return;
      }

      this.balance(grandParent);
    } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
      //부모의 형제노드가 존재하지 않거나, 그것이 검은색일때
      if (grandParent) {
        let newGrandParent;

        if (this.nodeComparator.equal(grandParent.left, node.parent)) {
          if (this.nodeComparator.equal(node.parent.left, node)) {
            newGrandParent = this.leftLeftRotation(grandParent);
          } else {
            newGrandParent = this.leftRightRotation(grandParent);
          }
        } else {
          if (this.nodeComparator.equal(node.parent.right, node)) {
            newGrandParent = this.rightRightRotation(grandParent);
          } else {
            newGrandParent = this.rightLeftRotation(grandParent);
          }
        }

        if (newGrandParent && newGrandParent.parent === null) {
          this.root = newGrandParent;

          this.makeNodeBlack(this.root);
        }

        this.balance(newGrandParent);
      }
    }
  }

  leftLeftRotation(grandParentNode) {
    const grandGrandParent = grandParentNode.parent;

    let grandParentNodeIsLeft;
    if (grandGrandParent) {
      grandParentNodeIsLeft = this.nodeComparator.equal(
        grandParent.left,
        grandParentNode
      );
    }

    const parentNode = grandParentNode.left;

    const parentRightNode = parentNode.right;

    parentNode.setRight(grandParentNode);

    grandParentNode.setLeft(parentRightNode);

    if (grandGrandParent) {
      if (grandParentNodeIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandParentNode.setRight(parentNode);
      }
    } else {
      parentNode.parent = null;
    }

    this.swapNodeColors(parentNode, grandParentNode);

    return parentNode;
  }

  leftRightRotation(grandParentNode) {
    const parentNode = grandParentNode.left;
    const childNode = parentNode.right;

    const childLeftNode = childNode.left;

    childNode.setLeft(parentNode);

    parentNode.setRight(childLeftNode);

    grandParentNode.setLeft(childNode);

    return this.leftLeftRotation(grandParentNode);
  }

  rightRightRotation(grandParentNode) {
    const grandGrandParent = grandParentNode.parent;

    let grandParentNodeIsLeft;
    if (grandGrandParent) {
      grandParentNodeIsLeft = this.nodeComparator.equal(
        grandGrandParent.left,
        grandParentNode
      );
    }

    const parentNode = grandParentNode.right;

    const parentLeftNode = parentNode.left;

    parentNode.setLeft(grandParentNode);

    grandParentNode.setRight(parentLeftNode);

    if (grandGrandParent) {
      if (grandParentNodeIsLeft) {
        grandGrandParent.setLeft(parentNode);
      } else {
        grandGrandParent.setRight(parentNode);
      }
    } else {
      parentNode.parent = null;
    }

    this.swapNodeColors(parentNode, grandParentNode);

    return parentNode;
  }

  rightLeftRotation(grandParentNode) {
    const parentNode = grandParentNode.right;
    const childNode = parentNode.left;

    const childRightNode = childNode.right;

    childNode.setRight(parentNode);

    parentNode.setLeft(childRightNode);

    grandParentNode.setRight(childNode);

    return this.rightRightRotation(grandParentNode);
  }

  makeNodeRed(node) {
    //노드를 빨간색으로 설정함
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.red);

    return node;
  }

  makeNodeBlack(node) {
    //노드를 검은색으로 설정함
    node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);

    return node;
  }

  isNodeRed(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.red;
  }

  isNodeBlack(node) {
    return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
  }

  isNodeColored(node) {
    return this.isNodeRed(node) || this.isNodeBlack(node);
  }

  swapNodeColors(firstNode, secondNode) {
    const firstColor = firstColor.meta.get(COLOR_PROP_NAME);
    const secondColor = secondColor.meta.get(COLOR_PROP_NAME);

    firstNode.meta.set(COLOR_PROP_NAME, secondColor);
    secondNode.meta.set(COLOR_PROP_NAME, firstColor);
  }
}
