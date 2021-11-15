console.log(squareA(2)); //4

function squareA(x) {
  return x * x;
}
//함수 선언문을 프로그램의 첫머리로 끌어올림

//함수 리터럴, Function 생성자, 화살표 함수 표현식으로 정의한 함수의 경우 변수에 그 함수의 참조를 할당해야 비로소 사용할 수 있는 상태가 된다(첫머리로 끌어올리지 않음)

const squareB = function (x) {
  return x * x;
};
console.log(squareB(2));

const squareC = new Function("x", "return x*x");
console.log(squareC(2));

const squareD = (x) => x * x;
console.log(squareD(2));
