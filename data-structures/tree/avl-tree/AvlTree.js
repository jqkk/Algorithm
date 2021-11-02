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
    //왼쪽 자식 노드를 부모 노드로 올리고, 부모 노드를 오른쪽 노드로 내린다
    const leftNode = rootNode.left;
    rootNode.setLeft(null);
    //rootNode의 왼쪽 자식 노드를 떼어냄(leftNode를 떼어냄)

    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode);
      //rootNode를 떼어내고 leftNode를 삽입함
      //왼쪽 자식 노드를 부모 노드로 올림
    } else if (rootNode === this.root) {
      //rootNode가 root인 경우
      this.root = leftNode;
    }

    if (leftNode.right) {
      rootNode.setLeft(leftNode.right);
      //만일 leftNode에 오른쪽 노드가 있다면 부모 노드가 삽입될 수 없으니, 오른쪽 노드를 부모노드의 왼쪽 노드로 설정한다
    }

    leftNode.setRight(rootNode);
    //부모 노드를 오른쪽 노드로 내림

    //만일 0 - 1 - 2가 rotate되어야한다면(2가 rootNode이고 1이 2의 왼쪽노드, 0이 1이 왼쪽 노드)
    //2를 자식과의 관계를 제거하고 떼어낸 후, 그 자리에 1을 삽입한다. 그 후 1의 오른쪽 노드에 2를 삽입함으로써 1 노드를 중심으로 왼쪽 노드는 0, 오른쪽 노드는 2로 만들어 균형을 맞춰줄 수 있다.
  }

  rotateLeftRight(rootNode) {
    //rootNode의 왼쪽 자식의 오른쪽 자식을 rootNode의 왼쪽 자식으로 올리고, rootNode의 왼쪽 자식을 leftRightNode의 왼쪽 자식으로 내린다
    //그후 rotateLeftLeft()을 진행한다
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    if (leftRightNode.left) {
      //만일 leftRightNode의 왼쪽 자식이 존재한다면 leftNode가 삽입될 수 없으므로 leftNode의 오른쪽 노드에 삽입한다
      leftNode.setRight(leftRightNode.left);
      leftRightNode.setLeft(null);
    }

    rootNode.setLeft(leftRightNode);

    leftRightNode.setLeft(leftNode);

    //rotateLeftLeft()을 할 수 있는 상태로 변경
    this.rotateLeftLeft(rootNode);
  }

  rotateRightLeft(rootNode) {
    //rootNode의 오른쪽 자식의 왼쪽 자식을 rootNode의 오른쪽 자식으로 올리고, rootNode의 오른쪽 자식을 rightLeftNode의 오른쪽 자식으로 내린다
    //그후 rotateRightRight()을 진행한다

    const rightNode = rootNode.right;
    rootNode.setRight(null);

    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);

    if (rightLeftNode.right) {
      //만일 rightLeftNode의 오른쪽 자식이 존재한다면 rightNode가 삽입될 수 없으므로 rightNode의 왼쪽 노드에 삽입한다
      rightNode.setLeft(rightLeftNode.right);
      rightLeftNode.setRight(null);
    }

    rootNode.setRight(rightLeftNode);

    rightLeftNode.setRight(rightNode);

    //rotateRightRight()을 할 수 있는 상태로 변경
    this.rotateRightRight(rootNode);
  }

  rotateRightRight(rootNode) {
    //오른쪽 자식 노드를 부모 노드로 올리고, 부모 노드를 왼쪽 노드로 내린다
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
