import LinkedListNode from "./LinkedListNode";
import Comparator from "../../utils/Comparator";

export default class LinkedList {
  //연결리스트
  constructor(comparatorFunction) {
    //생성자
    //파라미터에 값이 들어오지 않으면 comparatorFunction의 값은 undefined로 설정됨
    this.head = null; //head 초깃값 null(맨처음)
    this.tail = null; //tail 초깂값 null(맨뒤)
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    //노드를 head 위치에 삽입(맨 앞에 삽입)
    const newNode = new LinkedListNode(value, this.head); //노드 생성(만들어질 노드의 next는 현재 head주소)
    this.head = newNode; //head를 newNode로 바꿈

    if (!this.tail) {
      //tail이 null이라면
      this.tail = newNode; //tail을 newNode에 연결
    }

    //만일 새로운 노드가 삽입되기 전 노드 개수가 0이라면, 새로운 노드가 들어올 때 head와 tail은 모두 새로운 노드를 가리키고, 새로 추가된 노드의 next는 null이된다.

    //만일 새로운 노드가 삽입되기 전 노드 개수가 0이 아니라면, 새로운 노드가 들어올 때 head가 새로운 노드를 가리키고 tail은 변함이 없다. 새로 추가된 노드의 next는 이전의 head 주소이다.
    // a -> b -> c 로 연결되어있는 상황에서 x가 추가(prepend)된다고 하면, x -> a -> b -> c가 되는데, 이러면 x가 head가 되고, x의 next는 a의 주소가 되며, tail은 c가 된다.
    //(참고로 위 예시에서 c의 next는 null이다)

    return this; //연결리스트 인스턴스 자체를 반환한다.
  }

  append(value) {
    //노드를 맨 뒤에 삽입
    const newNode = new LinkedListNode(value); //노드 생성(만들어질 노드의 next는 null)

    if (!this.head) {
      //head가 비어있다면 즉, 노드 개수가 0이라면
      this.head = newNode; //head를 newNode에 연결
      this.tail = newNode; //tail을 newNode에 연결

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    //파라미터로 들어온 value값에 대응되는 모든 노드 삭제

    //case 1. head를 삭제하는 경우
    //case 2. tail을 삭제하는 경우
    //case 3. 그 외 노드를 삭제하는 경우

    if (!this.head) {
      //this.head이 null이라면 => false  then, !this.head => true
      return null; //노드가 비어있다면 null을 리턴함
    }

    let deleteNode = null;

    while (this.head && this.compare.equal(this.head.value, value)) {
      //삭제할 노드가 head일 경우
      deleteNode = this.head;
      this.head = this.head.next; //head를 삭제하고 head의 next를 head로 설정
      //a->b->c에서 b->c로
    }

    let currentNode = this.head; //currentNode는 head 주소를 가리킴

    if (currentNode !== null) {
      //currentNode가 null이 아닐경우
      while (currentNode.next) {
        //연결리스트를 순차적으로 읽어드림
        if (this.compare.equal(currentNode.next.value, value)) {
          //파라미터로 들어온 value값과 노드의 value값이 일치하는 경우
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next; //노드 삭제 후 이전노드를 그다음 노드와 연결
          //a->b->c에서 a->c로
          //a->b->c에서 a->b로(a->b->c->null에서 a->b->null)
        } else {
          currentNode = currentNode.next; //조건에 일치하지 않는 경우 다음 노드를 currentNode로 지정
        }
      }
    }

    if (this.compare.equal(this.tail.value, value)) {
      //삭제할 노드가 tail일 경우
      this.tail = currentNode;
      //tail 업데이트
      //a->b->c에서 a->b로
    }

    return deleteNode;
    //마지막 삭제된 노드를 return함
  }

  find({ value = undefined, callback = undefined }) {
    //노드 탐색
    if (!this.head) {
      return null; //노드가 비어있다면 null을 리턴함
    }

    let currentNode = this.head; //currentNode는 head 주소를 가리킴

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
    const deletedTail = this.tail; //삭제할 노드

    if (this.head === this.tail) {
      //head와 tail이 같을 경우(노드가 하나일 경우 or 노드가 비어있는 경우)
      this.head = null;
      this.tail = null;

      return deletedTail; //삭제한 노드를 반환
    }

    let currentNode = this.head; //currentNode는 head 주소를 가리킴
    while (currentNode.next) {
      if (!currentNode.next.next) {
        //currentNode의 next의 next가 null이면 currentNode의 next값을 null로 설정
        currentNode.next = null;
        //tail 삭제
        //a->b->c->null에서 a->b->null  (currentNode가 b일 때 currentNode.next.next가 null이된다. 그러면 currentNode.next=null로 설정이 되어 c노드는 연결리스트에서 삭제된다.)
      } else {
        currentNode = currentNode.next; //연결리스트를 순차적으로 읽어드림
      }
    }

    this.tail = currentNode; //tail 업데이트

    return deletedTail; //삭제한 노드를 반환
  }

  deleteHead() {
    //노드의 head를 삭제
    if (!this.head) {
      return null; //노드가 비어있다면 null을 리턴함
    }

    const deletedHead = this.head; //삭제할 노드

    if (this.head.next) {
      //head의 next가 있는 경우(노드가 두개이상일 경우)
      this.head = this.head.next; //head를 삭제하고 head의 next를 head로 설정
    } else {
      //노드가 하나일 경우
      this.head = null;
      this.tail = null;
    }

    return deletedHead; //삭제한 노드를 반환
  }

  fromArray(values) {
    //배열을 연결리스트로 변환
    values.forEach((value) => this.append(value));

    return this;
  }

  toArray() {
    //연결리스트를 배열로 변환
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    //연결리스트를 문자열로 변환
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
    //toString() 메소드로 노드의 value값만 뽑아옴
  }

  reverse() {
    //연결리스트를 역순으로 변환
    let currNode = this.head; //currNode는 head 주소를 가리킴
    let prevNode = null;
    let nextNode = null;

    //a->b->c->d->null 에서 d->c->b->a->null

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
    //head와 tail을 업데이트
    return this; //연결리스트를 반환
  }
}
