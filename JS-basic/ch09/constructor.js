function F() {}
console.log(F.prototype.constructor);
//생성자와 생성자의 프로토타입 객체는 서로를 참조한다
//생성자의 prototype 프로퍼티가 프로토타입 객체를 가리키며, 이 프로토타입 객체의 constructor 프로퍼티가 생성자가 가리키는 연결 고리로 묶여 있다

obj = new F();
//생성자로 생성한 인스턴스는 생성될 때 프로토타입 객체의 참조만 가지고 있을 뿐 생성자와는 직접적인 연결 고리가 없다

console.log(obj.constructor);

console.log(F.prototype.__proto__);
//함수 객체가 가진 프로토타입 객체의 내부 프로퍼티는 기본적으로 Object.prototype을 가리킨다
//생성자로 생성한 인스턴스가 Object.prototype 프로퍼티를 사용할 수 있다
//Obejct.prototype의 프로토타입은 null을 가리킨다

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}
Circle.prototype = {
  constructor: Circle,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
const c = new Circle({ x: 0, y: 0 }, 2.0);
console.log(c.constructor);
console.log(c instanceof Circle);

//프로퍼티만 정의되어 있는 새로운 객체를 prototype 프로퍼티 값으로 대입하면 인스턴스와 생성자 사이의 연결 고리가 끊겨 버린다.
//인스턴스와 생성자 사이의 연결 고리를 유지하려면 prototype으로 사용할 객체에 constructor 프로퍼티를 정의하고, 그 프로퍼티에 생성자의 참조를 대입해야 한다.

function Circle1(center, radius) {
  this.center = center;
  this.radius = radius;
}
const c1 = new Circle1({ x: 0, y: 0 }, 2.0);
Circle1.prototype = {
  constructor: Circle,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
//c1.area(); error
//인스턴스를 생성한 후에 생성자의 prototype 프로퍼티 값을 다른 객체로 교체해도 인스턴스의 프로토타입은 바뀌지 않는다. 인스턴스의 프로퍼티는 생성되는 시점의 프로토타입에서 상속받는다. 생성된 후에는 생성자의 프로토타입을 바꾸어도 교체한 객체로부터는 프로퍼티를 상속받지 않는다.

function Circle2(center, radius) {
  this.center = center;
  this.radius = radius;
}
const c2 = new Circle2({ x: 0, y: 0 }, 2.0);
Circle2.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};
console.log(c2.area());
