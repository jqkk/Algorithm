import LinkedList from "../linked-list/LinkedList";

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
    //스택이 비어있으면 true를 반환
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
    //헤드의 value값을 반환함
  }

  push(value) {
    this.linkedList.prepend(value);
  }

  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  toArray() {
    return this.linkedList
      .toArray()
      .map((LinkedListNode) => LinkedListNode.value);
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
