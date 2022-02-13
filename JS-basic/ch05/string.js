console.log(true + "   " + new Date());
//피연산자 중 하나가 문자열 또는 문자열로 변환할 수 있는 객체라면 다른 피연산자의 타입을 문자열로 바꾼 다음 연결한다

const msgObj = new String("Everything is practice");
//msgObj = "Everything is practice"

//문자열의 각 문자에는 배열 요소처럼 번호가 매겨져 있다
console.log(msgObj.charAt(3));
console.log(msgObj[3]);
msgObj[3] = "Z";
console.log(msgObj[3]); //문자열은 배열처럼 값을 대입해서 수정할 수 없고, 대입하면 무시된다
console.log(msgObj.length);

//레퍼 객체(wrapper object)
const msg = "Have Fun";
var c = msg.charAt(0);
const cObj = new String(msg); //문자열을 String 객체로 변환
var c = cObj.charAt(0); //String 객체의 메서드를 이용
console.log(c);
//문자열에서 프로퍼티를 사용하려고 하면 문자열이 자동으로 String객체로 변환됨
//처리가 끝나면 곧바로 메모리에서 삭제

//자바스크립트의 문자열은 불변(immutable)이다. replace(교체)와 toUpperCase(대문자 변경) 메서드 등은 새로운 문자열을 반환하며 메서드를 호출한 문자열은 수정하지 않는다.
