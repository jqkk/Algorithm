function square(x) {
  return x * x;
}

console.log(square(3));

//3은 인수(argument)
//x는 인자(parameter)

//함수 선언문의 호이스팅 -> 변수 선언문과 마찬가지로 함수 선언문을 프로그램의 첫머리로 끌어올림
console.log(add(2, 5));
function add(x, y) {
  return x + y;
}

var plus = add;
console.log(plus(2, 2));
