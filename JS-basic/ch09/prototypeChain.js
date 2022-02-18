const obj = {};
console.log(obj.__proto__);
//함수 객체의 prototype 프로퍼티와는 다른 객체이다
//객체의 __proto__ 프로퍼티는 그 객체에게 상속을 해 준 부모 객체를 가리킨다

const objA = {
  name: "Tom",
  sayHello: function () {
    console.log("Hello! " + this.name);
  },
};
const objB = {
  name: "Huck",
};

objB.__proto__ = objA;
const objC = {};
objC.__proto__ = objB;
objC.sayHello();

//자신이 갖고 있지 않은 프로퍼티를 __proto__ 프로퍼티가 가리키는 객체를 차례대로 거슬러 올라가며 검색한다 -> 프로토타입 체인
//객체는 자신이 가지고 있지 않은 특성(프로퍼티, 메서드)을 프로토타입 객체에 위임한다

//프로토타입 상속 -> 프로토타입 객체 지향 언어
