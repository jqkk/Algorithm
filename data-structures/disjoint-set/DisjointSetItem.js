export default class DisjointSetItem {
  constructor(value, keyCallback) {
    this.value = value;
    this.keyCallback = keyCallback;
    this.parent = null;
    this.children = {};
  }

  getKey() {
    //value값을 반환
    if (this.keyCallback) {
      return this.keyCallback(this.value);
    }

    return this.value;
  }

  getRoot() {
    //Root를 반환
    return this.isRoot() ? this : this.parent.getRoot();
  }

  isRoot() {
    //Root는 부모(parent)가 존재하지 않는 DisjointSetItem 객체
    //해당 객체의 Root여부 반환
    return this.parent === null;
  }

  getRank() {
    //해당 객체 하위의 모든 객체의 개수 반환
    if (this.getChildren().length === 0) {
      //children객체가 비어있다면
      return 0;
    }

    let rank = 0;

    this.getChildren().forEach((child) => {
      rank += 1;

      rank += child.getRank();
    });

    return rank;
  }

  getChildren() {
    //children 객체의 value값들을 배열로 변환하여 반환
    return Object.values(this.children);
  }

  setParent(parentItem, forceSettingParentChild = true) {
    //부모 설정
    this.parent = parentItem;
    if (forceSettingParentChild) {
      parentItem.addChild(this);
    }

    return this;
  }

  addChild(childItem) {
    //자식 추가
    this.children[childItem.getKey()] = childItem;
    childItem.setParent(this, false);
    //자식 객체의 부모를 해당 객체로 지정

    return this;
  }
}
