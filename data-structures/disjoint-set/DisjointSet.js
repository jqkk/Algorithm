import DisjointSetItem from "./DisjointSetItem";

export default class Disjoint {
  constructor(keyCallback) {
    this.keyCallback = keyCallback;
    this.items = {};
  }

  makeSet(itemvalue) {
    //DisjointSetItem 추가
    const disjointSetItem = new DisjointSetItem(itemvalue, this.keyCallback);

    if (!this.items[disjointSetItem.getKey()]) {
      //기존에 itemvalue값을 value로 가진 item이 존재할 경우 구문을 실행하지 않는다
      this.items[disjointSetItem.getKey()] = disjointSetItem;
    }

    return this;
  }

  find(itemValue) {
    //itemValue를 value로 가진 DisjointSetItem을 찾고 그의 Root의 value를 반환
    const templateDisjointItem = new DisjointSetItem(
      itemValue,
      this.keyCallback
    );

    const requiredDisjointItem = this.items[templateDisjointItem.getKey()];

    if (!requiredDisjointItem) {
      return null;
    }

    return requiredDisjointItem.getRoot().getKey();
  }

  union(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error("One or two values are not in sets");
    }

    if (rootKeyA === rootKeyB) {
      //root가 같다면 이미 같은 set에 존재한다는 의미이므로 나머지 코드를 실행시키지 않고 자기 자신을 반환
      return this;
    }

    const rootA = this.items[rootKeyA];
    const rootB = this.items[rootKeyB];

    if (rootA.getRank() < rootB.getRank()) {
      //rank가 더 큰 item 밑으로 rank가 더 작은 item을 자식으로 추가
      rootB.addChild(rootA);

      return this;
    }

    rootA.addChild(rootB);

    return this;
  }

  inSameSet(valueA, valueB) {
    //valueA 값을 가진 item과 valueB 값을 가진 item이 같은 set에 존재하는지 확인
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error("One or two values are not in sets");
    }

    return rootKeyA === rootKeyB;
    //root가 같다면 같은 set에 묶여있는 item이므로 root를 비교함
  }
}
