var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("A");
    resolve();
  }, 1000);
});
promise.then(function () {
  console.log("B");
});
//1초 후에 'A'를 표시하고, 그 다음에 함수 resolve를 호출해서 Promise 안의 처리를 종료시킨다. resolve 함수가 실행되면 then 메서드에 등록한 함수가 호출된다
