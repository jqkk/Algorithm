// console.time("answer_time");
// console.log("hi");
// console.timeEnd("answer_time");

//지정된 시간이 흐른 후에 함수 실행하기
setTimeout(function () {
  console.log(new Date());
}, 2000);

//지정된 시간마다 반복해서 실행하기
const timer = setInterval(function () {
  console.log(new Date());
}, 1000);

// clearInterval(timer);

//중지 ctrl + alt + m
