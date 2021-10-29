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
    //해당 노드부터 자식노드로 읽어가며 파라미터로 들어온 value값과 일치하는 노드를 찾는다
    if (this.nodeValueComparator.equal(this.value, value)) {
      //읽어드린 노드의 value가 인자로 들어온 value와 같을 때 그 노드를 반환
      return this;
    }

    if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
      //인자로 들어온 value가 읽어드린 노드보다 작을 때, 자식의 왼쪽 노드에서 find함수를 호출함
      return this.left.find(value);
    }

    if (this.nodeValueComparator.greaterThan(value, this.value) && this.right) {
      //인자로 들어온 value가 읽어드린 노드보다 클 때, 자식의 오른쪽 노드에서 find함수를 호출함
      return this.right.find(value);
    }

    //노드를 찾지 못하였을 경우 null을 반환
    return null;
  }

  contains(value) {
    //value에 해당한느 노드가 존재하는지 탐색
    return !!this.find(value);
    //!!는 이중부정 -> 다른 타입의 데이터를 boolean 타입으로 명시적으로 형 변환
  }

  remove(value) {
    //노드 제거
    const nodeToRemove = this.find(value);
    //제거할 노드 반환

    if (!nodeToRemove) {
      //제거할 노드를 찾지 못하였을 경우
      throw new Error("Item not found in the tree");
    }

    const { parent } = nodeToRemove;
    //parent = 제거할 노드의 부모

    if (!nodeToRemove.left && !nodeToRemove.right) {
      //제거할 노드의 왼쪽 노드와 오른쪽 노드가 모두 존재하지 않는다면
      if (parent) {
        //부모 노드가 있을 경우
        parent.removeChild(nodeToRemove);
        //직계 자식 노드 제거
      } else {
        //부모가 노드가 없을 경우
        nodeToRemove.setValue(undefined);
      }
    } else if (nodeToRemove.left && nodeToRemove.right) {
      //제거할 노드의 왼쪽 노드와 오른쪽 노드가 모두 존재한다면
      const nextBiggerNode = nodeToRemove.right.findMin();
      //nextBiggerNode = nodeToRemove다음으로 큰 노드
      if (!this.nodeComparator.equal(nextBiggerNode, nodeToRemove.right)) {
        //제거할 노드의 오른쪽 노드의 왼쪽 자식이 존재하는 경우
        this.remove(nextBiggerNode.value);
        nodeToRemove.setValue(nextBiggerNode.value);
        //이진탐색트리의 규칙을 지켜가며 삭제(오른쪽 서브 트리의 키들은 루트의 키보다 크다)
        //nodeToRemove 다음으로 큰 노드를 삭제하고 그 값을 nodeToRemove에 할당
      } else {
        //제거할 노드의 오른쪽노드의 왼쪽 자식이 존재하지 않는 경우
        nodeToRemove.setValue(nodeToRemove.right.value);
        nodeToRemove.setRight(nodeToRemove.right.right);
      }
    } else {
      //제거할 노드의 왼쪽 노드와 오른쪽 노드 중 하나만 존재한다면
      const childNode = nodeToRemove.left || nodeToRemove.right;
      //childNode = 자식 노드

      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
        //부모의 직계 자식 노드를 childNode로 변경
      } else {
        //부모가 존재하지 않는다면
        BinaryTreeNode.copyNode(childNode, nodeToRemove);
        //nodeToRemove노드를 childNode로 변경
      }
    }

    nodeToRemove.parent = null;
    //nodeToRemove -> parent 관계를 끊어줌

    return true;
    //제거가 정상적으로 되었을 경우 true를 반환
  }

  findMin() {
    //가장 작은 value를 가진 노드 반환
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }
}
