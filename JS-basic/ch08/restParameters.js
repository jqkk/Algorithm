function f(a, b, ...args) {
  console.log(a, b, args);
}

f(1, 2, 3, 4, 5, 6);

const sum = (...args) => {
  for (var i = 0, s = 0; i < args.length; i++) s += args[i];
  return s;
};
console.log(sum(1, 2, 3, 4, 5));

function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(3));
console.log(multiply(3, 2));

function add(a, b = a + 1) {
  return a + b;
}
add(2);
add(2, 1);
