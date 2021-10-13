import HashTable from "../hash-table/HashTable";

export default class TrieNode {
  constructor(character, isCompleteWord = false) {
    //character : 문자
    //isCompleteWord : 문자열이 끝나는 지점인지 check
    this.character = character;
    this.isCompleteWord = isCompleteWord;
    this.children = new HashTable();
    //해시 테이블 생성
  }

  getChild(character) {
    return this.children.get(character);
  }

  addChild(character, isCompleteWord = false) {
    if (!this.children.has(character)) {
      //해당 문자가 없다면
      this.children.set(character, new TrieNode(character, isCompleteWord));
      //새로운 자식 트라이노드 생성
    }
  }

  removeChild(character) {
    //자식 노드 제거
    const childNode = this.getChild(character);

    if (childNode && !childNode.isCompleteWord && !childNode.hasChildren()) {
      //자식 노드가 존재하고
      //자식 노드가 isCompleteWord가 아니고
      //자식 노드가 자식 노드를 가지지 않을 경우
      this.children.delete(character);
    }

    return this;
  }

  hasChild(character) {
    return this.children.has(character);
  }

  hasChildren() {
    return this.children.getKeys().length !== 0;
  }

  suggestChildren() {
    return [...this.children.getKeys()];
    //깊은 복사 : 원본과의 참조가 완전히 끊어진 객체
  }

  toString() {
    let childrenAsString = this.suggestChildren().toString();
    childrenAsString = childrenAsString ? `:${childrenAsString}` : "";
    const isCompleteString = this.isCompleteWord ? "*" : "";

    return `${this.character}${isCompleteString}${childrenAsString}`;
  }
}
