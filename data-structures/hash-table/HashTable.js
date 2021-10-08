import LinkedList from "../linked-list/LinkedList";

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    //defaultHashTableSize 크기의 배열을 생성, 배열의 값은 null로 초기화 한뒤 각각의 배열의 값이 연결리스트 객체를 참조

    this.keys = {};
  }

  hash(key) {
    //hash 함수(배열의 고유한 index 생성)
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );
    //배열.reduce((누적값, 현잿값, 인덱스, 요소)=>{return 결과}, 초깃값)
    //charCodeAt(0) : 문자열의 첫번째 문자 아스키코드 번호

    return hash % this.buckets.length;
    //나머지
  }

  set(key, value) {
    const keyHash = this.hash(key);
    //hash 함수로 keyHash값으로 변환
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];

    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });
    //파라미터로 들어온 key값과 일치하는 노드를 탐색한다.

    if (!node) {
      bucketLinkedList.append({ key, value });
      //신규 등록
    } else {
      node.value.value = value;
      //수정
    }
  }

  delete(key) {
    const keyHash = this.hash(key);
    //hash 함수로 keyHash값으로 변환
    delete this.keys[key];
    //key값 삭제
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      return bucketLinkedList.delete(node.value);
      //삭제
    }

    return null;
    //노드 탐색을 실패했을 시 null을 반환
  }

  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    return node ? node.value.value : undefined;
    //해시 테이블 탐색
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
    //hasOwnProperty : 해당 객체에 특정 프로퍼티에 대한 소유 여부를 반환
  }

  getKeys() {
    return Object.keys(this.keys);
    //key값을 가져옴
  }

  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket
        .toArray()
        .map((linkedListNode) => linkedListNode.value.value);

      return values.concat(bucketValues);
      //모든 value값을 가져옴
    }, []);
  }
}
