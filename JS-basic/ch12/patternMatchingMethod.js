// search 메서드 : 인수로 받은 정규 표현식 객체와 일치한 최초 문자열의 첫 번째 문자 위치를 반환한다. 일치하는 문자열을 찾지 못했을 때는 -1을 반환
// search 메서드는 원본 문자열을 수정하지 않는다

var s = "1 little,2 little indian";
console.log(s.search(/little/));
console.log(s.search(/\d/));
console.log(s.search(/\bindian/));
console.log(s.search(/3\s/));

//search 메서드에서는 전역 검색을 지원하지 않는다

// replace 메서드 : 첫 번째 인수로 받은 정규 표현식과 일치하는 문자열을 검색하고, 두 번째 인수로 받은 문자열로 치환한 새로운 문자열을 반환한다
// replace 메서드는 원본 문자열을 고치지 않는다
// g 플래그를 설정하면 일치한 문자열을 모두 치환한다
// g 플래그를 설정하지 않으면 가장 처음 일치한 문자열만 치환한다

var s = "1 little,2 little indian";
console.log(s.replace(/indian/, "boy"));
console.log(s.replace(/little/, "big"));
console.log(s.replace(/little/g, "big"));

// 두 번째 인수인 대체 문자열에는 특수한 치환 패턴인 $n, $&을 사용할 수 있다

// 1. $n에는 정규 표현식 안에 소괄호를 사용하여 구릅화한 n번째 정규 표현식과 일치한 문자열이 들어가며, n에는 0~9999 사이의 값을 넣을 수 있다

var person = "Tom, tom@example.com, 010-1234-5678";
var result = person.replace(/0(\d{1,4}-\d{1,4}-\d{4})/g, "+82-$1");
console.log(result);

var date = "오늘은 2016년9월10일 입니다.";
var result = date.replace(/(\d+)년(\d+)월(\d+)일/, "$1/$2/$3");
console.log(result);

var name = "Tom Sawyer";
var result = name.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(result);

//2. $&에는 일치한 부분 문자열이 들어온다

var address = "121-942 서울특별시 마포구 월드컵로10길 56";
var result = address.replace(/\d{3}-\d{3}/, "ⓐ)$&");
console.log(result);

// match 메서드 : 첫 번째 인수로 받은 정규 표현식과 일치하는 문자열을 순서대로 저장해서 배열로 반환한다
// match 메서드는 원본 문자열을 수정하지 않는다

console.log("1 little,2 little indian".match(/\d+/g));
var url = /\b(\w+):\/{2}([\w.]+)\/(\S*)\b/;
var text = "Tom의 홈페이지 URL은 http://www.example.com/~tom 입니다.";
console.log(text.match(url));

// split 메서드 : 첫 번째 인수로 문자열을 분할한 다음에 배열에 담아서 반환한다. 첫 번째 인수로는 문자열 또는 정규 표현식 객체를 넘긴다. 첫 번째 인수를 생략하면 원본 문자열 전체를 배열에 담아서 반환한다
// split 메서드는 원본 문자열을 수정하지 않는다

console.log("172.20.51.65".split("."));
var names = "Tom Sawyer ; Huckleberry Finn ;Becky Thatcher ";
var list = names.replace(/(^\s*|\s*$)/g, "").split(/\s*;\s*/);
console.log(list);

console.log("1 little,2 little indian".split(/\s*(\d)\s*/));

console.log("1, 2, 3, 4, 5".split(/\s*,\s*/, 3));
