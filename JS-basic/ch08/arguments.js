function multiply(a, b) {
  b = b || 1;
  return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(2)); //인수의 생략 => undefined

function f(x, y) {
  arguments[1] = 3;
  //arguments 변수의 값 : Arguments 객체
  //인수 값이 arguments에 저장됨
  console.log("x= " + x + ", y=" + y);
}
f(1, 2);

function myConcat(separator) {
  var s = "";
  for (let i = 1; i < arguments.length; i++) {
    s += arguments[i];
    if (i < arguments.length - 1) s += separator;
  }
  return s;
}
console.log(myConcat("/", "apple", "orange", "peach"));
