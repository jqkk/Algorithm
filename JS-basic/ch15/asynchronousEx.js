// console.log("A");
// setTimeout(function () {
//   console.log("B");
// }, 0);
// console.log("C");

function sleep(callback) {
  setTimeout(function () {
    callback();
  }, 1000);
}
sleep(function () {
  console.log("A");
  sleep(function () {
    console.log("B");
    sleep(function () {
      console.log("C");
    });
  });
});
