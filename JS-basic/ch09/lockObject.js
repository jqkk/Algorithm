const person = { name: "Tom" };
Object.preventExtensions(person);
//확장 방지 -> 프로퍼티를 추가할 수 없다
person.age = 17;
console.log("age" in person);
console.log(Object.isExtensible(person));

const person1 = { name: "Tom" };
Object.seal(person1);
person1.age = 17;
delete person1.name;
// Object.defineProperty(person1, "name", { enumerable: false }); error
console.log("name" in person1);
console.log("age" in person1);
console.log(Object.getOwnPropertyDescriptor(person1, "name"));
person1.name = "Huck";
console.log(person1);
console.log(Object.isSealed(person1));

//프로퍼티를 추가하는 것을 금지하고 기존의 모든 프로퍼티를 재정의 할 수 없게 만드는 것(추가, 삭제, 수정을 할 수 없고 값의 읽기와 쓰기만 가능)

const person2 = { name: "Tom" };
Object.freeze(person2);
//객체를 동결하면 객체의 프로퍼티가 읽기만 가능한 상태가 된다

console.log(Object.isFrozen(person2));
