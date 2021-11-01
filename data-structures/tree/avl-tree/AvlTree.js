import BinarySearchTree from "../binary-search-tree/BinarySearchTree";

export default class AvlTree extends BinarySearchTree {
  insert(value) {
    //노드 삽입
    super.insert(value);

    let currentNode = this.root.find(value);
    //currentNode = 삽입한 노드
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
      //currentNode를 부모 노드로 변경(위에서 아래로 노드를 읽어드림)
    }
  }

  remove(value) {
    super.remove(value);

    this.balance(this.root);
  }

  balance(node) {
    //트리의 높이를 조절
    if (node.balanceFactor > 1) {
      //왼쪽 노드의 높이가 2이상만큼 더 클 경우
      if (node.left.balanceFactor > 0) {
        //기준 노드의 왼쪽 자식에서 측정한 트리의 높이가 왼쪽이 더 클 경우
        this.rotateLeftLeft(node);
      } else if (node.left.balanceFactor < 0) {
        //기준 노드의 왼쪽 자식에서 측정한 트리의 높이가 오른쪽이 더 클 경우
        this.rotateLeftRight(node);
      }
    } else if (node.balanceFactor < -1) {
      //오른쪽 노드의 높이가 2이상만큼 더 클 경우
      if (node.right.balanceFactor < 0) {
        //기준 노드의 오른쪽 자식에서 측정한 트리의 높이가 왼쪽이 더 클 경우
        this.rotateRightRight(node);
      } else if (node.right.balanceFactor > 0) {
        //기준 노드의 오른쪽 자식에서 측정한 트리의 높이가 오른쪽이 더 클 경우
        this.rotateRightLeft(node);
      }
    }
  }

  rotateLeftLeft(rootNode) {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);
    //rootNode의 왼쪽 자식 노드를 떼어냄

    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode);
      //rootNode의 왼쪽 형제 노드로 leftNode를 삽입
    } else if (rootNode === this.root) {
      //rootNode가 root인 경우
      this.root = leftNode;
    }

    if (leftNode.right) {
      rootNode.setLeft(leftNode.right);
    }

    leftNode.setRight(rootNode);
  }

  rotateLeftRight(rootNode) {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left);
      leftRightNode.setLeft(null);
    }

    rootNode.setLeft(leftRightNode);

    leftRightNode.setLeft(leftNode);

    this.rotateLeftLeft(rootNode);
  }

  rotateRightLeft(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);

    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right);
      rightLeftNode.setRight(null);
    }

    rootNode.setRight(rightLeftNode);

    rightLeftNode.setRight(rightNode);

    this.rotateRightRight(rootNode);
  }

  rotateRightRight(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode === this.root) {
      this.root = rightNode;
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left);
    }

    rightNode.setLeft(rootNode);
  }
}
