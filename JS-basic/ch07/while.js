function fact(n) {
  let k = 1,
    i = 1;
  while (i < n) {
    k *= ++i;
  }
  return k;
}
console.log(5);

function linearSearch(x, a) {
  let i = 0;
  const n = a.length;
  while (i < n && x > a[i]) i++;
  if (x == a[i]) return i;
  return null;
}
const a = [2, 3, 4, 12, 15, 21, 34, 35, 46, 57, 70, 82, 86];
console.log(linearSearch(35, a));

function binarySearch(x, a) {
  const n = a.length;
  let left = 0,
    right = n - 1;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (x <= a[middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  if (x == a[right]) return right;
  return null;
}
console.log(binarySearch(35, a));
