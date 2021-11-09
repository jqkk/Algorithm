const a = [1, 2, 3];
const b = [1, 2, 3];
const c = a;

//객체 타입 변수의 값이 같은지 판별하는 행위는 같은 객체를 가리키는지 판별하는 것과 같다
console.log(a == b); //false
console.log(a == c); //true

console.log(null == undefined); //true(undefined와 null은 같은 것으로 친다)
console.log(1 == "1"); //true
//같은 타입이 되도록 타입을 변환한 다음에 동일한지 판별
console.log(true == 1);
console.log(false == 0);

console.log(NaN == NaN);
console.log(NaN === NaN);
//NaN은 모든 값이 같지 않다고 정의
console.log(null === undefined);
console.log(1 === "1");
console.log(true === 1);

const x = 5;
const y = -5;
console.log(x > 0 && y > 0);
console.log(x > 0 || y > 0);
console.log(!(a && b));

//단락 평가
var p = null;
console.log(p && p.name);
p = { name: "Tom", age: 18 };
console.log(p && p.name);

function f(x) {
  return x || 100;
}
console.log(f(undefined));
