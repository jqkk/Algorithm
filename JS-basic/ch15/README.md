## 이벤트 처리기를 등록하는 방법

1. HTML 요소의 이벤트 처리기 속성을 설정하는 방법

```HTML
  <input type="button" onclick="changeColor();">
```

2. DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정하는 방법

```javascript
const btn = document.getElementById("button");
btn.onclick = changeColor();
```

3. addEventListener 메서드를 사용하는 방법

```javascript
const btn = document.getElementById("button");
btn.addEventListener("click", changeColor, false);
```

## 이벤트 처리기의 특징과 문제점

1. HTML 요소의 이벤트 처리기 속성을 설정하는 방법

- HTML 문서를 읽어 들일 때 이벤트 처리기도 함께 설정하기 때문에 설정하기 쉽다
- HTML과 자바스크립트 프로그램이 뒤섞여 프로그램의 가독성이 떨어진다. 결과적으로 프로그램의 유지 보수성이 떨어진다
- 특정 요소의 특정 이벤트에 대해서 이벤트 처리기 단 하나만 등록할 수 있다. 그 요소에 똑같은 이벤트를 처리하는 이벤트를 처리하는 이벤트 처리기를 등록하면 나중에 등록한 함수가 이전에 등록한 함수를 덮어쓴다

2. DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정한 경우

- HTML과 자바스크립트 프로그램을 분리해서 작성할 수 있다 -> 유지 보수성 향상
- 특정 요소의 특정 이벤트에 대해서 이벤트 처리기를 단 하나만 등록할 수 있다

## addEventListener의 장점

- 같은 요소의 같은 이벤트에 이벤트 리스너를 여러 개 등록할 수 있다
- 이벤트 전파를 정밀하게 제어할 수 있다
- HTML 요소를 포함한 모든 DOM 노드에 이벤트 리스너를 등록할 수 있다
