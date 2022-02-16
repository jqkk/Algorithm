function makeCounter() {
  var count = 0;
  return f;
  function f() {
    return count++;
  }
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());

function makeCounter_v2() {
  var count = 0;
  return function () {
    return count++;
  };
}
var counter = makeCounter_v2();
console.log(counter());
console.log(counter());
console.log(counter());

function Person(name, age) {
  var _name = name;
  var _age = age;
  return {
    getName: function () {
      return _name;
    },
    getAge: function () {
      return _age;
    },
    setAge: function (x) {
      _age = x;
    },
  };
}
var person = Person("Tom", 18);
console.log(person.getName());
console.log(person.getAge());
person.setAge(19);
console.log(person.getAge());

function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}
var multi2 = makeMultiplier(2);
var multi10 = makeMultiplier(10);
console.log(multi2(3));
console.log(multi10(3));
