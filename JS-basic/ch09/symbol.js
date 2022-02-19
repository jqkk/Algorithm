Array.prototype[Symbol.for("shuffle")] = function () {
  const a = this;
  let m = a.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = a[m];
    a[m] = a[i];
    a[i] = t;
  }
  return this;
};
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array[Symbol.for("shuffle")]());
