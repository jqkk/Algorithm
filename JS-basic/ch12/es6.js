// u 플래그를 설정하면 문자열을 유느코드 코드 포인트 열로 처리한다

console.log("✔️ 모던 자바스크립트 입문".match(/[\s\S]/gu));

// y 플래그를 설정하면 시작 위치 고정 검색을 할 수 있다

var text = "1 little, 2 little, 3 little indian";
var reg = /\d+ little/y;
console.log(reg.sticky);
reg.lastIndex = 10;
console.log(reg.exec(text));
console.log(reg.lastIndex);
reg.lastIndex = 9;
console.log(reg.exec(text));
console.log(reg.lastIndex);

function hasRegExpY() {
  try {
    new RegExp(".", "y");
    return true;
  } catch (e) {
    return false;
  }
}

var reg = /abc/gi;
console.log(reg.flags);

var copy = new RegExp(reg, "gi");
// 깊은 복사
// 원본 정규 표현식 객체와 다른 플레그를 사용할 수 있다
