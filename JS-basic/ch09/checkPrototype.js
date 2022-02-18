function F() {}
const obj = new F();
console.log(obj instanceof F);
console.log(obj instanceof Object);
console.log(obj instanceof Date);
//지정한 객체의 프로토타입 체인에 지정한 생성자의 프로토타입 객체가 포함되어 있는지 판정

console.log(F.prototype.isPrototypeOf(obj));
console.log(Object.prototype.isPrototypeOf(obj));
console.log(Date.prototype.isPrototypeOf(obj));
//특정 객체가 다른 객체의 프로토타입 체인에 포함되어 있는지 판정
