var a = "global";

function f() {
  var b = "local";
  console.log(a); //"global"
  return b;
}
f();
// console.log(b) -> error

function f2() {
  //변수 충돌
  var a = "local";
  console.log(a); //"local"
  return a;
}
f2();
console.log(a); //"global"

function f3() {
  //함수 안에서의 변수 선언과 변수 끌어올림
  console.log(c); //"undefined"
  var c = "local";
  console.log(c); //"local"
  return c;
}
f3();

function f4() {
  //함수 안에서의 변수 선언 생략
  d = "local";
  console.log(d); //"local"
  return d;
}
f4();
console.log(d); //"local"
