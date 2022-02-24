//플래그 설정 방법

var reg = new RegExp("abc", "g");
var reg = /abc/g;
var reg = /abc/gi;

// i 플래그 : 대소문자 구별 없이 매칭

console.log(/\bcat\b/i.test("I like Cat"));
console.log(/\bcat\b/i.test("I like CAT"));

// g 플래그 : 일치하는 모든 문자열을 검색
// g 플래그가 설정되어 있지 않다면 처음 일치한 부분 문자열을 발견한 시점에서 작업을 끝낸다
// g 플래그가 설정되어 있고 일치하는 문자열을 찾은 후에도 검색할 문자열이 남아 있는 상태라면 다시 한번 정규 표현식의 시작 부분으로 되돌아가 같은 작업을 반복한다

// m 플래그 : 여러 줄 모드로 패턴 매칭을 한다

var reg = /^cat/im;
console.log(reg.test("Dog\nCat\nMonkey"));
var reg = /at$/im;
console.log(reg.test("Dog\nCat\nMonkey"));

var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
var result = countFruits.exec("there are 10 apples");
console.log(result);
