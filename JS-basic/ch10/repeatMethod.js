//반복 메서드 : 배열의 모든 요소를 순회하며 특정 작업을 수행하거나 특정 조건을 만족하는 요소를 가져올 때 사용하는 메서드
//반복 메서드 대부분은 첫 번째 인수로 고차 함수를 받는다

var a = [1, 2, 3, 4, 5];
var sum = 0;
a.forEach(function (value) {
  sum += value;
});
console.log(sum);
a.forEach(function (v, i, a) {
  a[i] = v * v;
});
console.log(a);
//forEach 메서드는 인수로 받은 함수를 배열의 요소별로 한 번씩 실행한다
//인수 value, index, array

var a = [1, 2, 3, 4, 5];
var b = a.map(function (x) {
  return 2 * x;
});
console.log(b);
var a = [1, 4, 9, 16, 25];
var b = a.map(Math.sqrt);
console.log(b);
//map 메서드는 인수로 받은 함수를 배열의 요소별로 한 번 씩 실행하며, 마지막에는 그 함수가 반환한 값으로 새로운 배열을 생성
//인수 value, index, array

var persons = [
  { name: "Tom", age: 17 },
  { name: "Huck", age: 18 },
  { name: "Becky", age: 16 },
];
var names = persons.map((person) => person.name);
var ages = persons.map((person) => person.age);
console.log(names);
console.log(ages);

len = persons.map((person) => person.name).map((name) => name.length);
console.log(len);

var a = [1, 2, 3, 4, 5];
let result = a.reduce(function (prev, value) {
  return prev + value;
}, 0);
console.log(result);
result = a.reduce(function (prev, value) {
  return prev + value;
});
console.log(result);
//reduce 메서드는 배열로 첫 번째 요소부터 마지막 요소까지의 합성 곱 처리를 한다
//함성 곱 처리란 배열 요소 하나를 함수로 처리한 후에 그 반환값을 다음 번 요소를 처리할 때 함수의 입력 값으로 사용하는 처리 방법을 말한다
//reduce 메서드는 마지막 요소를 처리한 함수가 값을 반환한다

var a = [1, 2, 3, 4, 5];
console.log(
  a.reduce(function (p, v) {
    return p * v;
  }, 1)
);
console.log(
  a.reduce(function (p, v) {
    return p > v ? p : v;
  })
);

var a = ["Tom", "Huck", "Becky"];
console.log(
  a.reduce(function (p, v) {
    return p + " " + v;
  })
);

console.log(
  a.reduce(function (p, v) {
    p[v] = v.length;
    return p;
  }, {})
);
