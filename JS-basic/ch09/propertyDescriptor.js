const tom = { name: "Tom" };
console.log(Object.getOwnPropertyDescriptor(tom, "name"));

console.log(Object.getOwnPropertyDescriptor({}, "name"));
console.log(Object.getOwnPropertyDescriptor(tom, "toString"));

const obj = {};
Object.defineProperty(obj, "name", {
  value: "Tom",
  writable: true,
  enumerable: false,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj, "name"));

var person = { name: "Tom" };
Object.defineProperty(person, "name", {
  writable: false,
});
Object.getOwnPropertyDescriptor(person, "name");
person.name = "Huck";
console.log(person.name);

var person = {
  name: "Tom",
  age: 17,
  sayHello: function () {
    console.log("Hello! " + this.name);
  },
};
Object.defineProperty(person, "sayHello", { enumerable: false });
for (let p in person) console.log(p);

var person = { name: "Tom", age: 17, sex: "남" };
Object.defineProperty(person, "age", { configurable: false });
delete person.age;
console.log(person.age);
// Object.defineProperty(person, "age", { enumerable: false }); error
Object.defineProperty(person, "age", { writable: false });
//재정의 가능 속성이 false일 때,
//delete 문으로 삭제하라는 명령 무시
//enumerable과 configurable 속성을 바꾸려고 시도하면 오류가 발생한다
//wriable 속성은 true일 때 false로 바꿀 수 있다.

var person = Object.defineProperties(
  {},
  {
    _name: {
      value: "Tom",
      writable: true,
      enumerable: true,
      configurable: true,
    },
    name: {
      get: function () {
        return this._name;
      },
      set: function (value) {
        var str = value.charAt(0).toUpperCase() + value.substring(1);
        this._name = str;
      },
      enumerable: true,
      configurable: true,
    },
  }
);
console.log(Object.getOwnPropertyDescriptor(person, "name"));

const group = {
  groupName: "Tennis circle",
  sayGroupName: function () {
    console.log("belong to " + this.groupName);
  },
};
var person = Object.create(group, {
  name: {
    value: "Tom",
    wriable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 18,
    wriable: true,
    enumerable: true,
    configurable: true,
  },
  sayName: {
    value: function () {
      console.log("I'm " + this.name);
    },
    wriable: true,
    enumerable: false,
    configurable: true,
  },
});
console.log(person.__proto__);
console.log(person);
console.log(person.groupName);
person.sayGroupName();
person.sayName();
