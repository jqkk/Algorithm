const a = [5, 4, 3];
a.forEach(function (val) {
  console.log(val);
});

var iter = a[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

while (true) {
  const iteratorResult = iter.next();
  if (iteratorResult.done == true) break;
  const v = iteratorResult.value;
  console.log(v);
}

for (let v of a) console.log(v);

for (let v of "ABC") console.log(v);

var b = ["A", "B", "C"];
for (let v of b) console.log(v);
var iter = b[Symbol.iterator]();
for (let v of iter) console.log(v);
var iter_iter = iter[Symbol.iterator]();
console.log(iter_iter === iter);
