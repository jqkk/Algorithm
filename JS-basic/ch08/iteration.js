const a = [5, 4, 3];
a.forEach(function (val) {
  console.log(val);
});

const iter = a[Symbol.iterator]();
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
