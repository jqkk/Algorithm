import LinkedList from "../linked-list/LinkedList";

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
    //비어있으면 true
    //비어있지 않다면 false
  }

  peek() {
    //프론트 노드의 value값을 읽어드림
    if (!this.linkedList.head) {
      //큐가 비어있을 경우 null을 반환
      return null;
    }
    return this.linkedList.head.value;
    //프론트 == 헤드
  }

  enqueue(value) {
    //큐에 엘리먼트 추가
    this.linkedList.append(value);
  }

  dequeue() {
    //큐의 프론트 엘리먼트를 빼냄
    const removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
    //빼낼 수 있는 엘리먼트가 있을 경우 엘리먼트의 value값을 반환하고, 없을 경우 null을 반환한다.
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}
