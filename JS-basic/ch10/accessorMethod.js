//접근자 메서드 : 배열을 다른 모습으로 가공한 새로운 배열을 반환하며 원래 배열은 수정하지 않는다

var a = ["A", "B", "C"];
console.log(a.join("-"));
//배열의 모든 요소 값을 문자열로 바꾼 후에 인수로 받은 문자로 연결해서 반환
//인수를 지정하지 않으면 쉼표로 배열의 요소 값을 연결해서 반환
console.log(a.join(""));

var a = ["A", "B", "C"];
//인수로 받은 값을 그 배열의 요소로 추가해서 새로운 배열 생성
//받은 인수가 배열인면 펼친 후에 배열에 추가
console.log(a.concat("D", "E"));

console.log(a.concat(["D", "E"], ["F", "G"]));

console.log(a.concat(1, "X", true));

console.log(a.concat("D", ["E", ["F", "G"]]));
//배열은 한 번만 펼쳐서 추가
//대상 배열과 인수 값을 연결할 때 앝은 복사를 사용

var a = ["A", "B", "C", "D", "E"];
console.log(a.slice(1, 3));
//배열의 일부 요소르 제거한 새로운 배열 반환
//end가 가리키는 요소의 바로 이전 요소까지 잘라낸다

console.log(a.slice(3));
//end를 생략하면 마지막 요소까지 잘라낸다

console.log(a.slice(1, -1));
console.log(a.slice(-3, -2));

var a = ["A", "B", "C", "C", "D"];
console.log(a.indexOf("C"));
console.log(a.lastIndexOf("C"));
//배열 안에서 인수로 지정한 값을 검색해서 가장 먼저 찾은 요소의 인덱스를 반환
//찾지 못했을 때는 -1을 반환
//indexOf 메서드는 인덱스가 작은 쪽부터 순서대로 검색
//lastIndexOf 메서드는 인덱스가 큰 쪽부터 역순으로 검색

console.log(a.indexOf("C", 3));
//두 번째 인수로 검색을 시작할 인덱스 지정

const date = new Date();
console.log(["A", "B", "C", date].toString());
console.log([1, 2, 3, date].toString());
console.log([1, [2, 3], date].toString());
console.log(["A", "B", "C", date].toLocaleString());
