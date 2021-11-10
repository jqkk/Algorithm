function sumArray(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}
const a = [3, 5, 1, 2, 6, 7];
console.log(sumArray(a));

const obj = { a: 1, b: 2, c: 3 };
for (let p in obj) {
  console.log("p = " + p);
  console.log("p.value = " + obj[p]);
}
