var tom = {
  name: "Tom",
  sayHello: function () {
    console.log("Hello! " + this.name);
  },
};
tom.sayHello();

var huck = { name: "Huck" };
huck.sayHello = tom.sayHello;

huck.sayHello();

function f() {
  console.log(this);
}

f();

var a = {};
a.f = f;
a.f();
