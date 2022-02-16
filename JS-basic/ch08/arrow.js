const obj = {
  say: function () {
    console.log(this); //obj
    const f = function () {
      console.log(this); //전역 객체 window
    };
    f();
    const g = () => console.log(this); //obj
    g();
  },
};
obj.say();

const f = function () {
  console.log(this.name);
};
const g = () => console.log(this.name);
const tom = { name: "Tom" };
f.call(tom);
g.call(tom);

//일반적으로 일반 함수에서 this는 전역 객체를 가리킨다
//모든 내부함수(함수속에 함수, 메소드 속 함수)의 this는 전역 객체를 가리킨다
//콜백함수로 일반함수가 올 경우 전역객체를 가리킨다
