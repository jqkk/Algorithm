class Person {
  constructor(name) {
    this.name = name;
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
}

const person = new Person("Tom");
console.log(person.name);
person.name = "Huck";
console.log(person.name);
person.sayName();
