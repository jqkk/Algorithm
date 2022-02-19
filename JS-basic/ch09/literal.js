//1. 계산된 프로퍼티 이름 : 대괄호로 묶인 임의의 계산식이 평가된 값을 프로퍼티 이름으로 사용할 수 있게 되었다

var prop = "name",
  i = 1;
var obj = { [prop + i]: "Tom" };
console.log(obj);
var obj = { [Symbol("heart")]: "A" };
console.log(obj);

//2. 프로퍼티 정의의 약식 표기 : 변수 prop가 선언되어 있을 때 { prop }를 { prop: prop }로 사용할 수 있게 되었다. 즉, 프로퍼티 이름이 변수 이름과 같을 때 { prop }로 줄여서 표현할 수 있게 되었다

var prop = 2;
var obj = { prop };
console.log(obj);

//3. 메서드 정의의 약식 표기 : { method() {} }
var person = {
  name: "Tom",
  sayHello() {
    console.log("Hello! " + this.name);
  },
};

var person = {
  name: "Tom",
  sayHello: function () {
    console.log("Hello! " + this.name);
  },
};

//{ method() {} }는 생성자로 사용할 수 없다. 즉, prototype 프로퍼티를 가지지 않으므로 new 연산자로 인스턴스를 생성할 수 없다
//{ method() {} }는 super 키워드를 사용할 수 있다

//4. 제너레이터 정의의 약식 표기
var obj = {
  *range(n) {
    for (let i = 0; i < n; i++) yield i;
  },
};
const it = obj.range(10);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//super 키워드를 사용할 수 있다
