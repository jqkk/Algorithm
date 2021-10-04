import DoublyLinkedListNode from "./DoublyLinkedListNode";
import Comparator from "../../utils/Comparator";

export default class DoublyLinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    //노드를 head 위치에 삽입(맨 앞에 삽입)
    const newNode = new DoublyLinkedListNode(value, this.head);
    //newNode의 next 주소는 현재 head의 주소

    if (this.head) {
      //this.head가 null이 아니라면
      //연결리스트가 비어있지 않다면
      this.head.previous = newNode;
    }
    this.head = newNode;
    //a <-> b 관계가 만들어짐

    if (!this.tail) {
      //newNode가 들어오기전 연결리스트가 비어있다면 tail을 설정해줌
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    //노드를 맨 뒤에 삽입
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      //노드가 비어있다면
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;

    this.tail = newNode;
    //a <-> b 관계가 만들어짐

    return this;
  }

  delete(value) {
    //파라미터로 들어온 value값에 대응되는 모든 노드 삭제
    if (!this.head) {
      //노드가 비어있다면
      return null;
    }

    //case 1. head를 삭제하는 경우
    //case 2. tail을 삭제하는 경우
    //case 3. 그 외 노드를 삭제하는 경우

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      //currentNode가 null이 아니면 계속 진행

      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;
        //만일 파라미터로 들어온 value가 노드의 value와 같을 시 deletedNode를 currentNode로 지정한다.

        if (deletedNode === this.head) {
          //head를 삭제하는 경우
          this.head = deletedNode.next;
          //head가 삭제될 예정이므로 head 변경

          if (this.head) {
            //삭제 후 노드의 개수가 0이 아닐 경우
            this.head.pervious = null;
            //원래 this.head.pervious의 값은 기존 head의 주소이다.
          }

          if (deletedNode === this.tail) {
            //노드가 1개인데 그것을 삭제하는 경우 => head와 tail이 모두 deletedNode이다
            //따라서 head와 tail을 업데이트 해주어야 한다.

            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          //노드가 한 개일 경우는 앞의 조건문에서 처리를 해주었으므로 여기선 따로 처리 x

          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;

          //a <-> b <-> c 에서 a <->c
          //여기서 삭제할 노드(deletedNode)가 b라면 perviousNode는 a, nextNode는 c이다.
        }
      }

      currentNode = currentNode.next; //노드를 순차적으로 읽어드림
    }

    return deletedNode;
    //마지막 삭제된 노드를 return함
  }

  find({ value = undefined, callback = undefined }) {
    //노드 탐색
    if (!this.head) {
      return null; //노드가 비어있다면 null을 리턴함
    }

    let currentNode = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        //탐색할 value와 같은 값을 가진 노드가 있을 경우
        return currentNode; //처음으로 찾은 노드를 return
      }

      currentNode = currentNode.next; //노드를 순차적으로 읽어드림
    }

    return null; //일치하는 노드가 없을 경우 null을 리턴
  }

  deleteTail() {
    //노드의 tail을 삭제
    if (!this.tail) {
      //tail이 null이라면...
      return null;
    }

    if (this.head === this.tail) {
      //연결리스트에 노드가 한 개뿐일 경우
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    const deletedTail = this.tail;

    this.tail = this.tail.previous;
    //tail update
    this.tail.next = null;

    return deletedTail;
  }

  deleteHead() {
    //노드의 head를 삭제
    if (!this.head) {
      //head가 null이라면...
      //연결리스트가 비어있을 경우
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      //노드가 하나 이상일 경우
      this.head = this.head.next;
      this.head.pervious = null;
    } else {
      //노드가 하나일 경우
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  toArray() {
    //연결리스트를 배열로 변환
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      //currentNode가 null이 아니면 계속 진행
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  reverse() {
    //연결리스트를 역순으로 변환
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      prevNode = currNode.previous;

      currNode.next = prevNode;
      currNode.previous = nextNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
