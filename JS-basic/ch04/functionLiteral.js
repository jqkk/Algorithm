const hello = function () {
  console.log("hello");
};
hello();

var bark = function () {
  console.log("wow");
};
console.log(bark()); //->undefined

//함수 리터럴의 호이스팅
console.log(square); //->undefined
// console.log(square(3)); ->error
var square = function () {
  return x * x;
};

const addTen = function K(x) {
  return x + 10;
};
console.log(addTen(5));
