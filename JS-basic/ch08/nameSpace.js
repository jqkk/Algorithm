var myApp = myApp || {};

myApp.name = "Tom";
myApp.showName = function () {};
myApp.view = {};
myApp.controls = {};
myApp.view.draw = function () {};
myApp.controls.timeInterval = 16;

var x = "global x";
//함수를 이름 공간으로 활용하기
(function () {
  var x = "local x";
  var y = "local y";
})();
console.log(x);
//console.log(y)

//모듈 패턴
var Module = Module || {};
(function (_Module) {
  var name = "NoName";
  function getName() {
    return name;
  }
  _Module.showName = function () {
    console.log(getName());
  };
  _Module.setName = function (x) {
    name = x;
  };
})(Module);
Module.setName("Tom");
Module.showName();
