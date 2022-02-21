//전개 연산자

console.log([..."ABC"]);

function* createNumbers(from, to) {
  while (from <= to) yield from++;
}
var iter = createNumbers(10, 15);
console.log([...iter]);

var a = ["A", "B", "C"];
a.push(...["D", "E"]);
console.log(a);

var a = [5, 2, 3, 7, 1];
console.log(Math.max(...a));
