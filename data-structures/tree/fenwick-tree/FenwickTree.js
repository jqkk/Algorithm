export default class FenwickTree {
  constructor(arraySize) {
    this.arraySize = arraySize;
    //생성자 파라미터(인자)로 배열의 길이를 받음

    this.treeArray = Array(this.arraySize + 1).fill(0);
    //treeArray 배열 생성후 0으로 초기화
    //배열을 1번부터 사용한다(0번은 사용하지 않는다)
  }

  increase(position, value) {
    if (position < 1 || position > this.arraySize) {
      throw new Error("Position is out of allowed range");
    }

    for (let i = position; i <= this.arraySize; i += i & -i) {
      this.treeArray[i] += value;
    }

    return this;
  }

  query(position) {
    if (position < 1 || position > this.arraySize) {
      throw new Error("Postion is out of allowed range");
    }

    let sum = 0;

    for (let i = position; i > 0; i -= i & -i) {
      sum += this.treeArray[i];
    }

    return sum;
  }

  queryRange(leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      throw new Error("Left index can not be greater than right one");
    }

    if (leftIndex === 1) {
      return this.query(rightIndex);
    }

    return this.query(rightIndex) - this.query(leftIndex - 1);
  }
}
