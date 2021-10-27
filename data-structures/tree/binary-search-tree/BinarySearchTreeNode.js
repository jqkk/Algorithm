import BinaryTreeNode from "../BinaryTreeNode";
import Comparator from "../../../utils/Comparator";

export default class BinarySearchTreeNode extends BinaryTreeNode {
  //BinaryTreeNode를 상속받음
  constructor(value = null, compareFunction = null) {
    super(value);

    this.compareFunction = compareFunction;
    this.nodeValueComparator = new Comparator(compareFunction);
  }

  insert(value) {
    if (this.nodeValueComparator.equal(this.value, null)) {
      //root노드의 value가 null일 경우
      this.value = value;
      //value값을 설정해준다

      return this;
    }

    if (this.nodeValueComparator.lessThan(value, this.value)) {
      //현재 노드의 값보다 파라미터(인자)로 들어온 value가 작은 경우
      if (this.left) {
        return this.left.insert(value);
        //재귀함수
      }

      const newNode = new BinarySearchTreeNode(value, this.compareFunction);
      this.setLeft(newNode);
      //왼쪽 노드에 삽입

      return newNode;
    }

    if (this.nodeValueComparator.greaterThan(value, this.value)) {
      //현재 노드의 값보다 파라미터(인자)로 들어온 value가 더 큰 경우
      if (this.right) {
        return this.right.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value, this.compareFunction);
      this.setRight(newNode);
      //오른쪽 노드에 삽입

      return newNode;
    }

    //노드들 간 value가 중복될 수는 없다

    return this;
  }

  find(value) {
    if (this.nodeValueComparator.equal(this.value, value)) {
      return this;
    }

    if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
      return this.right.find(value);
    }

    return null;
  }

  contains(value) {
    return !!this.find(value);
  }

  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error("Item not found in the tree");
    }

    const { parent } = nodeToRemove;

    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.setValue(undefined);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (!this.nodeComparator.equal(nextBiggerNode, nodeToRemove.right)) {
        this.remove(nextBiggerNode.value);
        nodeToRemove.setValue(nextBiggerNode.value);
      } else {
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setValue(nodeToRemove.right.right);
      }
    } else {
      const childNode = nodeToRemove.left || nodeToRemove.right;

      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        BinaryTreeNode.copyNode(childNode, nodeToRemove);
      }
    }

    nodeToRemove.parent = null;

    return true;
  }

  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }
}
