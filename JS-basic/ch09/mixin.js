function mixin(target, source) {
  const keys = Object.keys(source);
  for (let i = 0; i < keys.length; i++) {
    const descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
    Object.defineProperty(target, keys[i], descriptor);
  }
  return target;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj = mixin(obj1, obj2);
console.log(obj);

//얕은 복사 : 객체의 복사본을 만드는 대신 그 객체의 참조만 복사하는 행위(원본과 사본이 같은 객체를 참조)
//깊은 복사 : 객체의 사본을 만들어 다른 메모리 영역에 복사하는 행위

const person1 = {
  _name: "Tom",
  get name() {
    return this._name;
  },
};
const person2 = {};
mixin(person2, person1);
person2.name = "Huck";
console.log(person2.name);
console.log(person2);
