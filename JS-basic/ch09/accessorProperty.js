const person = {
  _name: "Tom",
  //데이터 프로퍼티

  get name() {
    //접근자 프로퍼티
    return this._name;
  },
  set name(value) {
    //접근자 프로퍼티
    const str = value.charAt(0).toUpperCase() + value.substring(1);
    this._name = str;
  },
};
console.log(person.name);
person.name = "huck";
console.log(person.name);

delete person.name;
console.log(person.name);
