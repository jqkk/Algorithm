import Comparator from "../../utils/Comparator";
import HashTable from "../hash-table/HashTable";

export default class BinaryTreeNode {
  //이진 트리 노드 : 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리 자료구조
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    this.meta = new HashTable();
    //해시 테이블 생성

    this.nodeComparator = new Comparator();
  }

  get leftHeight() {
    if (!this.left) {
      return 0;
    }
    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }

  get height() {
    //재귀함수를 이용하여 트리의 height(높이)를 구함
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  get uncle() {
    //삼촌 노드를 구함(부모노드의 형제인 노드를 구함)
    //부모노드가 부모의 부모노드에 대한 왼쪽 노드일 때 부모의 부모노드에 대한 오른쪽 노드 반환
    if (!this.parent) {
      return undefined;
    }

    if (!this.parent.parent) {
      return undefined;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
      //부모노드가 왼쪽 노드일 경우 오른쪽 노드 반환
      return this.parent.parent.right;
    }

    //부모 노드가 오른쪽 노드일 경우 왼쪽 노드 반환
    return this.parent.parent.left;
  }

  setValue(value) {
    this.value = value;

    return this;
  }

  setLeft(node) {
    //왼쪽 노드를 설정한다.
    if (this.left) {
      //이미 왼쪽 노드가 있는 경우 : 노드 간 연결을 끊는다.
      //(자식 -> 부모 연결을 끊음)
      this.left.parent = null;
    }
    //부모 -> 자식 연결
    this.left = node;

    if (this.left) {
      //자식 -> 부모 연결
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    //오른쪽 노드를 설정한다.
    if (this.right) {
      //이미 오른쪽 노드가 있는 경우 : 노드 간 연결을 끊는다.
      //(자식 -> 부모 연결을 끊음)
      this.right.parent = null;
    }
    //부모 -> 자식 연결
    this.right = node;

    if (node) {
      //자식 -> 부모 연결
      this.right.parent = this;
    }

    return this;
  }

  removeChild(nodeToRemove) {
    //자식 노드 삭제

    //자식이 존재하는지 확인 & 제거할 노드 매칭
    if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
      this.left = null;
      return true;
    }

    //자식이 존재하는지 확인 & 제거할 노드 매칭
    if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
      this.right = null;
      return true;
    }

    //노드를 정상적으로 삭제하면 true를 반환
    //노드를 삭제하지 못했다면 false를 반환
    return false;
  }

  replaceChild(nodeToReplace, replacementNode) {
    //직계자식노드 교환
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  static copyNode(sourceNode, targetNode) {
    //트리 복제
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }

  traverseInOrder() {
    //트리 배열 형식으로 변환
    let traverse = [];

    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    traverse.push(this.value);

    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  toString() {
    //트리 문자열 형식으로 변환
    return this.traverseInOrder().toString();
  }
}
