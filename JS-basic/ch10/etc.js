//비구조화 할당

var [a, b] = [1, 2];
console.log(a, b);

[a, b] = [2 * a, 3 * b];
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

var [a, b, c] = [1, 2];
console.log(a, b, c);
var [a, b] = [1, 2, 3];
console.log(a, b);
var [, a, , b] = [1, 2, 3, 4];
console.log(a, b);

var array, first, second;
array = [first, second] = [1, 2, 3, 4];
console.log(array);
console.log(first, second);

//나머지 요소
[a, b, ...rest] = [1, 2, 3, 4];

//기본값
[a = 0, b = 1, c = 2] = [1, 2];

function rotation(x, y, theta) {
  const s = Math.sin(theta),
    c = Math.cos(theta);
  return [c * x - s * y, s * x + c * y];
}
var [a, b] = rotation(1, 2, Math.PI / 3);
console.log(a, b);

var { a: x, b: y } = { a: 1, b: 2 };
console.log(x, y);

var { a: x, b: y } = { a: y, b: x };
console.log(x, y);

var { a: x, b: y } = { a: 1, c: 2 };
console.log(x, y);

var { a: x, b: y } = { a: 1, b: 2, c: 3 };
console.log(x, y);

var { sin, cos, tan, PI } = Math;
console.log(cos(0), PI);

var { a: x = 1, b: y = 2, c: z = 3 } = { a: 2, b: 4 };
console.log(x, y, z);

var { a = 1, b = 2, c = 3 } = { a: 2, b: 4 };
console.log(a, b, c);

var [a, b, c] = "ABC";
function* createNumbers(from, to) {
  while (from <= to) yield from++;
}
var [a, b, c, d, e] = createNumbers(10, 15);
console.log(a, b, c, d, e);

var [a, [b, c]] = [1, [2, 3]];
var {
  a: x,
  b: { c: y, d: z },
} = { a: 1, b: { c: 2, d: 3 } };
console.log(x, y, z);

var person = { name: "Tom", age: 17, hobby: ["Tennis", "Music"] };
var {
  name,
  age,
  hobby: [hobby1, hobby2],
} = person;
console.log(name, age, hobby1, hobby2);
