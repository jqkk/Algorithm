export default class LinkedListNode {
  //연결리스트 노드 생성
  constructor(value, next = null) {
    this.value = value; //값
    this.next = next; //다음 노드의 주소
  }

  toString(callback) {
    //노드의 값을 String으로 변환
    return callback ? callback(this.value) : `${this.value}`;
  }
}
