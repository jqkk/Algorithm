//수정 메서드 : 원본 배열을 바로 수정한다

let a = ["A", "B", "C"];
a.push("D");
console.log(a);
a.push("E", "F");
console.log(a);

a = ["A", "B", "C"];
a.pop();
//배열의 마지막 요소를 잘라내어 반환
console.log(a);

a = ["A", "B", "C"];
a.shift();
//배열의 첫 번째 요소를 제거한 후 모든 배열 요소를 왼쪽으로 이동시킴
console.log(a);

a = ["A", "B", "C"];
a.unshift("X");
//배열 앞부분에 요소를 한 개 이상 추가한 후 모든 배열 요소를 오른쪽으로 이동시킴
console.log(a);
a.unshift("Y", "Z");
console.log(a);

a = ["A", "B", "C", "D"];
a.splice(1, 2, "X", "Y", "Z");
//특정 인덱스의 배열 요소를 갈아 끼울 때 사용하는 범용 메서드
console.log(a);

a = ["A", "B", "C", "D"];
a.splice(2);
console.log(a);

a = ["A", "B", "C", "D"];
a.splice(-1);
console.log(a);

a = ["A", "B", "C", "D"];
a.splice(1, 0, "X", "Y");
console.log(a);

a = [5, 2, 7, 1, 3, 9, 8];
a.sort(function (a, b) {
  return a - b;
});
console.log(a);

function compaireFunc(key) {
  return function (a, b) {
    return a[key] - b[key];
  };
}
const persons = [
  { name: "Tom", age: 17 },
  { name: "Huck", age: 18 },
  { name: "Becky", age: 16 },
];
persons.sort(compaireFunc("age"));
