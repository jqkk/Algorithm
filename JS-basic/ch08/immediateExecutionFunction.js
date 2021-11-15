//즉시 실행 함수

//일반적인 경우
const A = function () {
  console.log("hi");
};
A();

//익명 함수를 정의하고 곧바로 즉시 실행 하는 함수 -> 즉시 실행 함수
(function () {
  console.log("Bob");
})();

//(function() { ... })()
//(function() { ... }())

console.log(
  (function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
  })(5)
);
// console.log(fact(10)); -> error
//즉시 실행 함수에도 이름을 붙일 수 있지만 함수 이름이 함수 내부에서만 유효하다

const C = (function (k) {
  return k;
})("lee");
console.log(C);
