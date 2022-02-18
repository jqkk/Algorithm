const person = (function () {
  let _name = "Tom";
  return {
    get name() {
      return _name;
    },
    set name(value) {
      const str = value.charAt(0).toUpperCase() + value.substring(1);
      _name = str;
    },
  };
})();
console.log(person.name);
person.name = "huck";
console.log(person.name);
//즉시 실행 함수로 클로저를 생성하면 데이터를 객체 외부에서 읽고 쓸 수 없도록 숨기고 접근자 프로퍼티로만 읽고 쓰도록 만들 수 있다. -> 데이터 캡슐화
//_name은 즉시 실행 함수의 지역 변수이므로 함수 바깥에서 읽거나 쓸 수 없다.
