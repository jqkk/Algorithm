const person = { name: "Tom" };
console.log("name" in person);
console.log("age" in person);
console.log("toString" in person);
//in 연산자 : 객체 안에 지명한 프로퍼티가 있는지 검색
//검색 대상 : 그 객체가 소유한 프로퍼티와 상속받은 프로퍼티 모두

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("toString"));
//지명한 프로퍼티가 그 객체가 소유한 프로퍼티면 true를 반환, 상속받은 프로퍼티면 false를 반환

const person1 = { name: "Tom", age: 17 };
const person2 = Object.create(person1);
person2.name = "Huck";
console.log(preson2.propertyIsEnumerable("name")); //true: 이 객체가 소유한 열거 가능 프로퍼티
console.log(person2.propertyIsEnumerable("age")); //false: 상속받은 프로퍼티
console.log(Object.prototype.propertyIsEnumerable("toString")); //false: 열거할 수 없는 프로퍼티
