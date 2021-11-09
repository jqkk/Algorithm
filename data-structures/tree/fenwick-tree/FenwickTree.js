export default class FenwickTree {
  constructor(arraySize) {
    this.arraySize = arraySize;
    //생성자 파라미터(인자)로 배열의 길이를 받음

    this.treeArray = Array(this.arraySize + 1).fill(0);
    //treeArray 배열 생성후 0으로 초기화
    //배열을 1번부터 사용한다(0번은 사용하지 않는다)
  }

  increase(position, value) {
    //FenwickTree insert(삽입)
    if (position < 1 || position > this.arraySize) {
      //position이 1보다 작거나 arrarySize보다 클 경우
      throw new Error("Position is out of allowed range");
    }

    for (let i = position; i <= this.arraySize; i += i & -i) {
      //i를 이진수로 나타내었을 때 가장 뒤에 나오는 1이 위치하는 값
      //&는 and 비트 연산자
      this.treeArray[i] += value;
    }

    return this;
  }

  query(position) {
    //position까지의 합 반환
    if (position < 1 || position > this.arraySize) {
      //position이 1보다 작거나 arrarySize보다 클 경우
      throw new Error("Postion is out of allowed range");
    }

    let sum = 0;

    for (let i = position; i > 0; i -= i & -i) {
      sum += this.treeArray[i];
    }

    return sum;
  }

  queryRange(leftIndex, rightIndex) {
    //구간 합구하기(leftIndex부터 rightIndex까지의 합)
    if (leftIndex > rightIndex) {
      throw new Error("Left index can not be greater than right one");
    }

    if (leftIndex === 1) {
      return this.query(rightIndex);
    }

    return this.query(rightIndex) - this.query(leftIndex - 1);
  }
}
