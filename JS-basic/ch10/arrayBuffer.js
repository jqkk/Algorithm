//ArrayBuffer 생성자는 메모리에 고정 길이를 가진 인접한 영역(버퍼)를 확보한다 ~> 연속된 데이터 영역

const buffer = new ArrayBuffer(1024);
console.log(buffer.byteLength);
//ArrayBuffer는 메모리에 영역을 확보하는 열할만 할 뿐 버퍼를 조작하는 메서드는 제공하지 않는다
//버퍼를 조작하려면 형식화 배열(TypedArray 객체) 또는 DataView 객체를 사용해야 한다

const copy = buffer.slice(3, 6);
console.log(copy.byteLength);
