## 배열

배열은 Array 타입의 객체이며 Array.prototype의 프로퍼티를 상속받는다

## Array 타입의 객체의 성질

1. 0 이상의 정수 값을 프로퍼티 이름으로 갖는다
2. length 프로퍼티가 있으며, 요소를 추가하거나 삭제하면 length 프로퍼티 값이 바뀐다. 또한 length 프로퍼티 값을 줄이면 그에 따라 배열 크기가 줄어든다
3. 프로토타입이 Array.prototype이므로 Array.prototype의 메서드를 상속받아서 사용할 수 있다. 또한 instanceof 연산자로 평가하면 Array 생성자 함수로 생성된 객체로 표시된다

## 유사 배열

- 프로퍼티 이름이 0 이상의 정수이며 length 프로퍼티가 있는 객체
- 예) 함수의 인수를 저장한 Arguments 객체, DOM의 document.getElementsByTagName 메서드, document.getElementsByName 메서드 등이 반환하는 NodeList 객체
