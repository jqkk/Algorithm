const a = {};
for (let i = 0; i < 10; i++) {
  a[i] = i;
}
a.length = 10;
for (var i = 0, sum = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum);
//유사 배열 객체는 Array.prototype의 메서드를 사용할 수 없다

const b = { 0: "A", 1: "B", 2: "C", length: 3 };
console.log(Array.prototype.join.call(b, ","));
Array.prototype.push.call(b, "D");
console.log(b);
console.log(Array.prototype.slice.call(b, 0));
const c = { 0: 1, 1: 2, 2: 3, length: 3 };
console.log(
  Array.prototype.map.call(c, function (v) {
    return v * v;
  })
);
