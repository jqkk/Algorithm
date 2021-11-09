const even = [2, 4, 6, 8];
console.log(even.length);

const a = [2, , 4];
console.log(a);

const odd = new Array(1, 3, 5, 7);
console.log(odd[1]);
console.log(odd["1"]);

odd[4] = 9;
console.log(odd);

odd.push(11);
console.log(odd);

delete odd[5];
console.log(odd);
console.log(odd.length);
//delete연산자를 사용하여 배열의 요소를 삭제해도 그 배열의 length 프로퍼티 값은 바뀌지 않는다

const num = new Array(5);
console.log(num.length);

//희소 배열 : 인덱스가 0부터 시작되지 않는 배열
const arr = ["A", "B", "C"];
arr[4] = "E";
console.log(arr);
