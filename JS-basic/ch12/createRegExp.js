var reg = new RegExp("abc"); //RegExp 생성자로 생성
var reg = /abc/; //정규 표현식 리터럴로 생성
//"abc"라는 문자열을 포함한다

//정규표현식에서 특수 문자를 문자로서 사용할 때는 \ 문자를 앞에 붙여 주어야 한다

var reg = /cat/;
console.log(reg.test("cats and dogs"));
console.log(reg.test("Cat"));

var reg = /Script/;
var result = reg.exec("JavaScript");
console.log(result);

//정규 표현식의 패턴 : 일반 문자 + 메타 문자

console.log(/[0123456789]/.test("10 little indians"));

console.log(/[^0-9]/.test("137")); //false
console.log(/[^0-9]/.test("b00")); //true

// [a-z] //전체 소문자 중 문자 한 개
// [abcx-z] // a b c x y z 중 문자 한 개
// [z-zA-Z0-9]  // 모든 알파벳과 숫자 중 문자 한 개

console.log(/c.t/.test("cat"));
console.log(/c.t/.test("cute"));
console.log(/c..t/.test("cute"));
console.log(/c..l/.test("hot and cool"));

// \d는 숫자로 해석할 수 있는 문자 한 개와 일치한다. [0123456789]의 단축 표기이다
// \d는 숫자 외의 문자와 일치한다. [^123456789]의 단축 표기이다

var dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(dateTime.test("it's 2016-08-27 10:15"));
console.log(dateTime.test("2016-Aug-27 10:15"));

// \w는 모든 영어 단어 문자(알파벳, 숫자, 언더스코어)이다. [a-zA-Z0-9_]
// \W는 영어 단어 문자(알파벳, 숫자, 언더스코어)가 아닌 문자와 일치한다

console.log(/\w/.test("A"));
console.log(/\w/.test("!@#$%"));

// \s는 모든 공백 문자(공백 문자, 탭 문자, 개행 문자 등)와 일치한다

console.log(/\s\w\w/.exec("JavaScript RegExp"));
console.log(/\s\w\w/.exec("JavaScriptRegExp"));

// \S는 공백 문자가 아닌 문자와 일치한다

// /[a-z]{6,12}/  // 알파벳 소문자가 여섯 자 이상이며 열두 자 이하인 문자열과 일치
// /[a-z]{6,}     // 알파벳 소문자가 여섯 자 이상인 문자열과 일치
// /[a-z]{4}      // 알파벳 소문자가 네 자인 문자열과 일치

var dateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
console.log(dateTime.test("it's 2016-08-27 10:15"));
console.log(dateTime.test("it's Aug-27 10:15"));

// ?는 {0,1}과 같다
//  /[a-z]{4}\d?/   // 알파벳 소문자가 네 자 등장하고 그 뒤에 숫자가 없거나 한 개인 문자열과 일치

// +는 {1,}과 같다
//  /\s+Tom\s+/     // Tom의 바로 앞에 공백 문자가 최소 한 자 이상 등장하는 문자열과 일치

// *는 {0,}와 같다
//  /[a-z]{4}\d*/   // 알파벳 소문자가 네 자 등장하고 그 뒤에 숫자가 0개 이상 등장하는 문자열과 일치

console.log(/Java.*/.exec("I love JavaScript"));
console.log(/Java.?/.exec("I love JavaScript"));

var bark = /bow+(woo+f)+/;
console.log(bark.test("bowwoofwoofwooofwoooof"));

var header = /<h[1-6]>.*<\/h[1-6]>/;
console.log(header.test("<h1>JavaScript</h1>"));
console.log(header.test("<h1>JavaScript</h2>"));

var header = /<(h[1-6])>.*<\/\1>/;
console.log(header.test("<h1>JavaScript</h1>"));
console.log(header.test("<h1>JavaScript</h2>"));
console.log(header.exec("<h1>JavaScript</h1>"));
// exec 메서드가 반환하는 배열의 첫 번째 요소에는 정규 표현식과 일치한 마지막 문자열이 들어가고, 그 이후의 요소에는 각 부분 정규 표현식과 일치한 문자열이 하나씩 차례대로 들어간다

var postalCode = /①(?:\d{3})-(?:\d{3})/; // 캡처링 x
console.log(postalCode.exec("①463-803"));

// ^ : 문자열의 시작 위치
var jsFirst = /^JavaScript/;
console.log(jsFirst.test("JavaScript is powerful"));
console.log(jsFirst.test("I love JavaScript"));

// $ : 문자열의 마지막 위치

var jsLast = /JavaScript$/;
console.log(jsLast.test("JavaScript is powerful"));
console.log(jsLast.test("I love JavaScript"));

// \b는 영어 단어의 경계 위치와 일치한다

console.log(/\bcat\b/.test("저는 cat을 좋아합니다."));
console.log(/\bcat\b/.test("cat을 좋아합니다."));

// \B는 영어 단어 경계 외의 위치에 일치

console.log(/\Bdog/.test("Bulldog"));
console.log(/\Bdog/.test("i love dog"));

// x(?=y)라고 표기하면 x 다음에 y가 나오는 패턴이 된다

console.log(/Java(?=Script)/.exec("I like JavaScript"));
console.log(/Java(?=Script)/.exec("I like JavaCoffee"));

// x(?!y)라고 표기하면 x 다음에 y가 나오지 않는 패턴이 된다

console.log(/Java(?!Script)/.exec("I like JavaScript"));
console.log(/Java(?!Script)/.exec("I like JavaCoffee"));

// | : 선택 패턴은 문자열 여러 개 중에서 문자열 하나와 일치

var animal = /apple|peach|orange/;
console.log(animal.test("2 apples"));
console.log(animal.test("pea"));

var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
var result = countFruits.exec("10 apples");
console.log(result);
console.log(result[1]);
