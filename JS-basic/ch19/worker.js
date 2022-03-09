importScripts("prime.js");
onmessage = function (e) {
  console.log("worker: message recieved");
  const message = e.data;
  const n = parseInt(message);
  postMessage(prime(n));
};
