function fibonacci(n) {
  if (n < 2) return n;
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return fibonacci[n];
}
//메모리제이션 : 함수를 호출했을 때의 인수와 반환값을 한 쌍으로 만들어 저장해 두는 기법

for (var i = 0; i <= 20; i++) {
  console.log((" " + i).slice(-2) + ":" + fibonacci(i));
}
