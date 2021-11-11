const a = [2, 4, 6, 8, 10],
  b = [1, 3, 5, 6, 9, 11];
loop: for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) break loop;
  }
}
console.log("a[" + i + "] = b[" + j + "]");

const c = [
  [2, 4, 6, 8],
  [1, 5, 12, 3],
  [7, 6, 8, 5],
  [5, 15, 3, 4],
  [3, 2, 9, 4],
];
var max = Number.NEGATIVE_INFINITY;
loop: for (let i = 0; i < c.length; i++) {
  let average = 0;
  for (let j = 0; j < c[i].length; j++) {
    if (a[i][j] > 10) continue loop;
    average += c[i][j];
  }
  average /= c[i].length;
  console.log(`i = ${i} : 평균값 = ${average}`);
  if (max < average) max = average;
}
console.log(`최대 평균값 = ${max}`);
