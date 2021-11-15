function norm(x) {
  const sum2 = sumSquare();
  return Math.sqrt(sum2);
  function sumSquare() {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += x[i] * x[i];
    }
    return sum;
  }
}
//중첩 함수의 참조는 그 중첩 함수를 둘러싼 외부 함수의 지역 변수에 저장되므로 외부 함수의 바깥에서는 읽거나 쓸 수 없다
//(sumSquare함수는 norm함수 바깥에서는 사용할 수 없다)

//중첩 함수는 자신을 둘러싼 외부 함수의 인수와 지역 변수에 접근할 수 있다

const a = [2, 1, 3, 5, 7];
const n = norm(a);
console.log(n);
