function prime(n) {
  const p = [];
  for (let i = 2; i <= n; i++) p[i] = true;
  const max = Math.floor(Math.sqrt(n));
  var x = 2;
  while (x <= max) {
    for (let i = 2 * x; i <= n; i += x) p[i] = false;
    while (!p[++x]);
  }
  var x = n + 1;
  while (!p[--x]);
  return x;
}
