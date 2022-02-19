const person1 = { name: "Tom", age: 17 };
const person2 = Object.create(person1);
person2.name = "Huck";
for (let p in person2) console.log(p);
//for in문 : 객체와 객체의 프로토타입 체인에서 열거할 수 있는 프로퍼티를 찾아내서 꺼내는 반복문이다
//내장 생성자 -> 열거 불가능

const a = [0, 2, 4, 6, 8];
a.name = "evens";
for (let i in a) console.log(i);
//자바스크립트의 배열은 Array 타입의 객체

function A() {}
console.log(A.constructor);
k = new A();
console.log(k.constructor);
console.log(Object.getOwnPropertyNames(Function.prototype));
//<참고>  인스턴스가 어떤 생성자로 생성된 것인지 알아내는 방법

const group = { groupName: "Tennis circle" };
const person = Object.create(group);
person.name = "Tom";
person.age = 17;
person.sayHello = function () {
  console.log("Hello! " + this.name);
};
Object.defineProperty(person, "sayHello", { enumerable: false });
const p = Object.keys(person);
//Object.keys() : 해당 객체가 소유한 프로퍼티 이름만 조회하는 용도
for (let i = 0; i < p.length; i++) {
  console.log(person[p[i]]);
}
console.log(Object.getOwnPropertyNames(person));
//열거할 수 있는 프로퍼티와 열거할 수 없는 프로퍼티의 이름을 모두 배열로 만듬
