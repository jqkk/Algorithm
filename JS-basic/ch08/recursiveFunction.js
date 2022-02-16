function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(5));

const fact2 = function (n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
  //익명 함수에서의 재귀 호출
};

//반복문을 재귀 함수로 바꾸어 표현할 수는 있지만 대부분은 while 문이나 for 문으로 작성하는 편이 이해하기 쉽고 메모리 공간도 적게 차지한다
