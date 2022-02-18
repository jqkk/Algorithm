let obj = new Object();
//Object 생성자는 내장 생성자
//Object 생성자는 인수 없이 실행하면 빈 객체를 생성한다

obj = new Object("ABC");
//인수에 값을 지정하면 그 값을 Object 객체로 변환한 인스턴스를 생성한다

obj = Object();
//new 없이 호출해도 new를 붙여서 호출했을 때와 같은 방식으로 동작한다

const day = new Date();
console.log(day.getMonth());
console.log(day.hasOwnProperty("length"));

const person1 = {
  name: "Tom",
  sayHello: function () {
    console.log("Hello!" + this.name);
  },
};
const person2 = Object.create(person1);
person2.name = "Huck";
person2.sayHello();

const a = Object.create(Object.prototype);
const b = Object.create(null);
// b.toString();  error
a.toString();
