class Person {
  constructor(name) {
    this.name = name;
    Person.personCount++;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  sayName() {
    console.log(this.name);
  }

  static count() {
    return Person.personCount;
  }
}
Person.personCount = 0;

const person1 = new Person("Tom");
console.log(Person.count());
const person2 = new Person("Huck");
console.log(Person.count());
