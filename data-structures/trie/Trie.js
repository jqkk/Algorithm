import TrieNode from "./TrieNode";

const HEAD_CHARACTER = "*";

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER);
  }

  addWord(word) {
    //문자열을 문자로 쪼개어 트라이노드로 만들고, 노드들 간 연결
    const characters = Array.from(word);
    let currentNode = this.head;

    for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
      const isComplete = charIndex === characters.length - 1;
      currentNode = currentNode.addChild(characters[charIndex], isComplete);
    }

    return this;
  }

  deleteWord(word) {
    //노드 삭제
    const depthFirstDelete = (currentNode, charIndex = 0) => {
      if (charIndex >= word.length) {
        return;
      }

      const character = word[charIndex];
      const nextNode = currentNode.getChild(character);

      if (nextNode == null) {
        return;
      }

      depthFirstDelete(nextNode, charIndex + 1);

      if (charIndex == word.length - 1) {
        nextNode.isCompleteWord = false;
      }

      currentNode.removeChild(character);
      //끝단 자식 노드부터 제거해나감
    };

    depthFirstDelete(this.head);

    return this;
  }

  suggestNextCharacters(word) {
    //word 마지막 문자의 자식 노드 배열 반환
    const lastCharacter = this.getLastCharacterNode(word);

    if (!lastCharacter) {
      return null;
    }

    return lastCharacter.suggestChildren();
  }

  doesWordExist(word) {
    //노드에 word가 있는지 판별
    const lastCharacter = this.getLastCharacterNode(word);

    return !!lastCharacter && lastCharacter.isCompleteWord;
  }

  getLastCharacterNode(word) {
    //마지막 문자 노드 반환
    const characters = Array.from(word);
    //문자열을 문자 배열로 변경
    let currentNode = this.head;

    for (let charIndex = 0; charIndex < characters.length; charIndex += 1) {
      if (!currentNode.hasChild(characters[charIndex])) {
        return null;
      }

      currentNode = currentNode.getChild(characters[charIndex]);
    }

    return currentNode;
  }
}
