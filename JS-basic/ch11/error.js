// x++;   // ReferenceError: 없는 변수 x를 만남
// if(a>0) {a++   // SyntaxError : }가 없음
/*
  var obj = {}
  obj.join()  // TypeError : join 메서드가 정의되어 있지 않음
*/
/*
  var pi = 3.14
  pi.toFixed(100) // RangeError : toFixed 메서드는 0~20 사이의 값만 받을 수 있음
*/
// decodeURIComponent("%")  // URIError : % 이후에 아무것도 없음

const error = new TypeError("배열이 아닙니다");
console.log(error.message);
console.log(error.name);
console.log(error.toString());
