function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = gen();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

for (let v of iter) console.log(v);

function* createNumbers(from, to) {
  while (from <= to) yield from++;
}
const n = createNumbers(10, 20);
for (let v of n) console.log(v);

function* fibonacci() {
  let fn1 = 0,
    fn2 = 1;
  while (true) {
    let fnew = fn1 + fn2;
    fn1 = fn2;
    fn2 = fnew;
    reset = yield fn1;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}

const f = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(f.next().value);
}

function* g() {
  yield 1;
  yield 2;
  yield 3;
}
const _g = g();
console.log(_g.next());
console.log(_g.return(10));
console.log(_g.next());

function* idMaker() {
  var count = 0;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      console.log("오류가 발생했습니다");
    }
  }
}
const im = idMaker();
console.log(im.next());
console.log(im.next());
im.throw(new Error("오류"));

function* fa() {
  yield "X";
  yield "Y";
}

function* gas() {
  yield 0;
  yield* [2, 4];
  yield* "AB";
  yield* fa();
}
const _gas = gas();
for (let v of _gas) console.log(v);
