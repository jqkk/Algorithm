import Comparator from "../../utils/Comparator";

export default class Heap {
  constructor(comparatorFunction) {
    if (new.target === Heap) {
      //Heap 자체로 인스턴스를 생성하면 안된다.
      //메소드 오버라이딩을 이용해야함(MaxHeap, MinHeap)
      throw new TypeError("Cannot construct Heap instance directly");
    }

    //heap의 배열 표현
    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  getLeftChildIndex(parentIndex) {
    //부모에 대한 왼쪽 자식 노드의 인덱스 번호 반환
    //인덱스는 0번부터
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    //부모에 대한 오른쪽 자식 노드의 인덱스 번호 반환
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    //부모 노드의 인덱스 번호 반환
    return Math.floor((childIndex - 1) / 2);
    //Math.floor() : 소수점 이하를 버림한다
  }

  hasParent(childIndex) {
    //부모 노드가 존재하는지 확인
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    //왼쪽 자식 노드가 존재하는지 확인
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    //오른쪽 자식 노드가 존재하는지 확인
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex) {
    //왼쪽 자식 노드를 반환
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  rightChild(parentIndex) {
    //오른쪽 자식 노드를 반환
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  parent(childIndex) {
    //부모 노드를 반환
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  swap(indexOne, indexTwo) {
    //노드 간 변경(swap)
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  peek() {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
    //최상위 부모 노드 반환
  }

  poll() {
    //트리의 첫번째 값을 반환하고 제거
    if (this.heapContainer.length === 0) {
      return null;
    }

    if (this.heapContainer.length === 1) {
      //노드가 한 개일 경우
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();
    //맨 끝 노드를 pop 한뒤 맨 처음 노드에 넣어주는 것이므로 결과적으로 맨 처음 노드를 pop하는 결과와 같다.
    this.heapifyDown();
    //트리 재정렬(위에서 아래로)

    return item;
    //삭제한 노드 반환
  }

  add(item) {
    //노드 추가
    this.heapContainer.push(item);
    this.heapifyUp();
    //트리 재정렬(아래서 위로)
    return this;
  }

  remove(item, comparator = this.compare) {
    //노드 삭제
    const numberOfItemsToRemove = this.find(item, comparator).length;
    //numberOfItemsToRemove : 삭제할 노드 개수

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      const indexToRemove = this.find(item, comparator).pop();
      //삭제할 노드의 index를 받아옴

      if (indexToRemove === this.heapContainer.length - 1) {
        //맨마지막 노드를 삭제시켜야 할 경우 pop시킴
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        const parentItem = this.parent(indexToRemove);
        //삭제할 노드의 부모 노드를 가져옴

        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem ||
            this.pairIsInCorrectOrder(
              parentItem,
              this.heapContainer[indexToRemove]
            ))
        ) {
          //삭제할 노드의 왼쪽 자식 노드가 존재하고, 부모 노드가 존재하지 않거나, 부모 노드와 삭제 노드가 pairIsInCorrectOrder조건에 만족할 경우
          this.heapifyDown(indexToRemove);
          //위에서 아래로
        } else {
          this.heapifyUp(indexToRemove);
          //아래서 위로
        }
      }
    }
    return this;
  }

  find(item, comparator = this.compare) {
    //트리 탐색(item과 같은 값인 노드들의 배열 반환)
    const foundItemIndices = [];

    for (
      let itemIndex = 0;
      itemIndex < this.heapContainer.length;
      itemIndex += 1
    ) {
      if (comparator.equal(item, this.heapContainer[itemIndex])) {
        foundItemIndices.push(itemIndex);
        //트리의 노드 인덱스를 배열에 집어넣음
      }
    }

    return foundItemIndices;
  }

  isEmpty() {
    //트리가 비어있는지
    return !this.heapContainer.length;
  }

  toString() {
    return this.heapContainer.toString();
  }
  //heapify : root에 추가된 노드를 포함한 전체가 heap을 만족하도록 각 노드들의 위치를 조정하는 과정
  heapifyUp(customStartIndex) {
    //트리를 아래에서 위로 읽어드리며 정렬시킴
    let currentIndex = customStartIndex || this.heapContainer.length - 1;
    //currentIndex : 파라미터로 들어온 인수이거나, 들어온 인수가 undefined일 경우 배열의 끝 인덱스를 집어넣는다

    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(
        this.parent(currentIndex),
        this.heapContainer[currentIndex]
      )
    ) {
      //부모 노드가 존재하고, 부모 값 비교
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      //노드 재배치
      currentIndex = this.getParentIndex(currentIndex);
      //currentIndex 변경(아래서 위로 올라가며 노드를 읽어드림)
    }
  }

  heapifyDown(customStartIndex = 0) {
    //트리를 위에서 아래로 읽어드리며 정렬시킴
    let currentIndex = customStartIndex;
    //currentIndex : 파라미터로 들어온 인수이거나, 들어온 인수가 undefined일 경우 배열의 시작 인덱스를 집어넣는다
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.pairIsInCorrectOrder(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        //자식 오른쪽 노드가 존재하고, 오른쪽 노드보다 왼쪽노드 비교
        //최대 힙일 경우 : 오른쪽 자식이 왼쪽 자식보다 클 경우
        //최소 힙일 경우 : 오른쪽 자식이 왼쪽 자식보다 작을 경우
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
        //nextIndex 변경
      }

      if (
        this.pairIsInCorrectOrder(
          this.heapContainer[currentIndex],
          this.heapContainer[nextIndex]
        )
      ) {
        break;
      }
      this.swap(currentIndex, nextIndex);
      //노드 재배치
      currentIndex = nextIndex;
    }
  }

  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(
      `You have to implement heap pair comparision method for ${firstElement} and ${secondElement} values`
    );
  }
}
