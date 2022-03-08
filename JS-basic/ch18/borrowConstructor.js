function Ellipse(a, b) {
  this.a = a;
  this.b = b;
}

Ellipse.prototype.getArea = function () {
  return Math.PI * this.a * this.b;
};

//Object.prototype.toString을 덮어쓴다
Ellipse.prototype.toString = function () {
  return "Ellipse " + this.a + " " + this.b;
};

function Circle(r) {
  Ellipse.call(this, r, r);
}

Circle.prototype = Object.create(Ellipse.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Circle,
    writable: true,
  },
});

Circle.prototype.toString = function () {
  return "Circle " + this.a + " " + this.b;
};

const circle = new Circle(2);

console.log(circle.getArea());
console.log(circle.toString());
