function F() {}
F.prototype.prop = "prototype value";
const obj = new F();
console.log(obj.prop);

obj.prop = "instance value";
console.log(obj.prop); //instance value
console.log(F.prototype.prop); //prototype value

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
  //메서드 안의 this는 생성자로 생성한 인스턴스를 가리킨다
};

const c1 = new Circle({ x: 0, y: 0 }, 2.0);
const c2 = new Circle({ x: 0, y: 1 }, 3.0);
const c3 = new Circle({ x: 1, y: 0 }, 1.0);
console.log("넓이 =" + c1.area());
