//call by value(값의 전달)
function add1(x) {
  return (x = x + 1);
}
var a = 3;
var b = add1(a);
console.log("a= " + a + ", b= " + b);

//call by reference(참조 전달)
function add2(p) {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
}
var a = { x: 3, y: 4 };
var b = add2(a);
console.log("a.x= " + a.x + ", b.x= " + b.x);

//인수가 여러개인 함수를 우아하게 전달하는 방법
//~>객체의 프로퍼티를 인수에 담아서 넘긴다
