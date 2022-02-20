let x = new Array(3);
for (let i = 0; i < 3; i++) {
  x[i] = new Array(3);
}

for (let count = 1, i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    x[i][j] = count++;
  }
}
console.log(x);
