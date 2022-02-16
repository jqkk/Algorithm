function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const square = function (x) {
  return x * x;
};
const add1 = function (x) {
  return x + 1;
};
const h = compose(square, add1);
console.log(h(2));

function compose_v2(f, g) {
  return function () {
    return f.call(this, g.apply(this, arguments));
  };
}

function partial(f) {
  const args = arguments;
  return function () {
    const a = Array.prototype.slice.call(args, 1);
    for (let i = 0, j = 0; i < a.length; i++) {
      if (a[i] == undefined) a[i] = arguments[j++];
    }
    return f.apply(this, a);
  };
}

const sqrt = partial(Math.pow, undefined, 0.5);
console.log(sqrt(100));
