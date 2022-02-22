/*
  try{
    // 이곳에 실행할 코드를 적는다(예외가 발생할 수 있는 코드)
  } catch(exception){
    // 이 블록은 try 블록에서 예외가 발생했을 때 실행된다
    // exception에는 던져진 예외 값이 들어온다. 이 값을 바탕으로 예외를 처리한다

  } finally {
    // 이 블록 안의 코드는 try 블록과 catch 블록 코드가 실행된 이후에 반드시 실행된다
  }
*/

try {
  f();
} catch (e) {
  console.log("예외를 캐치함 -> " + e);
}

function f() {
  g();
}
function g() {
  h();
}
function h() {
  throw new Error("오류가 발생했습니다");
}

function sleepAndError(g, n) {
  setTimeout(function () {
    for (let i = 0; i < n; i++) console.log(i);
    g.throw(new Error("오류가 발생했습니다"));
  }, 1000);
}

function run(callback, ...argsList) {
  const g = (function* (cb, args) {
    try {
      yield cb(g, ...args);
    } catch (e) {
      console.log("예외를 캐치함 -> " + e);
    }
  })(callback, argsList);
  g.next();
}
run(sleepAndError, 10);

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
try {
  a.forEach(function (v, i, a) {
    if (i > 5) {
      throw false;
    }
    return (a[i] = v * v);
  });
} catch (e) {
  if (e) throw e;
}
console.log(a);
