// exec 메서드 : 정규 표현식과 일치하는 문자열을 검색해서 일치한 문자열과 부분 정규 표현식에 일치한 문자열을 배열에 담아 반환
// 일치하는 문자열을 찾지 못했을 때는 null을 반환

var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/;
var text = "Tom: 010-1234-5678";
var result = tel.exec(text);
console.log(result);

// index 프로퍼티 : 가장 처음에 일치한 문자열의 시작 위치가 들어 있음
// input 프로퍼티 : 원본 문자열의 참조가 들어 있음

//g 플래그를 설정한 정규 표현식으로 exec나 test 메서드를 실행하면 문자열 바로 다음 번 문자의 위치가 정규 표현식 객체의 lastIndex 프로퍼티에 저장된다. 일치하지 않을 때는 0이 저장된다
var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text = "Tom: 010-1234-5678\nHuck: 020-550-7809\nBecky: 030-4321-9876";
console.log(tel.lastIndex);
console.log(tel.exec(text));
console.log(tel.lastIndex);
console.log(tel.exec(text)); // 검색 재개

tel.lastIndex = 0;
while ((result = tel.exec(text)) != null) {
  console.log(result[0], result[1], result[2], result[3]);
}
