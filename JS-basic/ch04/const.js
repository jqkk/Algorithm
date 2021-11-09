//반드시 초기화해야한다
const c = 2;

//선언한 변수에 다시 대입을 시도하면 타입 오류가 발생한다
// c = 5; -> error

//상수 값이 객체이거나 배열일 경우 프로퍼티 또는 프로퍼티 값을 수정할 수 있다
const origin = { x: 1, y: 2 };
origin.x = 3;
console.log(origin);
