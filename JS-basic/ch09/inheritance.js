function F() {}
const obj = new F();
console.log(Object.getPrototypeOf(obj));

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

const c = new Circle({ x: 0, y: 0 }, 2.0);

const newObj = {}; //객체 생성
newObj.__proto__ = Circle.prototype; //프로토타입의 설정
// Circle.apply(newObj, arguments);
Circle.apply(newObj, [{ x: 0, y: 0 }, 2.0]); //객체 초기화
console.log(newObj);
// return newObj
