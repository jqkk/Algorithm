## 웹 브라우저에서 자바스크립트가 하는 일

1. 웹 페이지의 Document 객체 제어(HTML 요소와 CSS 스타일 작업) -> DOM API 활용
2. 웹 페이지의 Window 객체 제어 및 브라우저 제어 -> 웹 브라우저에 내장된 객체 활용(Location, Navigator 등)
3. 웹 페이지에서 발생하는 이벤트 제어
4. HTTP를 이용한 통신 제어 -> XMLHttpRequest 객체 활용

## 빨리진 자바스크립트

현재 최신 웹 브라우저는 모두 JIT 컴파일러를 도입하여 자바스크립트 실행 속도의 고속화를 꾀하고 있다

## 자바스크립트 코드를 삽입하는 방법

1. script 요소의 내용물로 작성하기(인라인 스크립트)

```html
<script>
  console.log('Hello!")
</script>
```

2. 외부 파일 읽어 들이기(외부 스크립트)

```html
<script src="../scripts/sample.js"></script>
```

3. 이벤트 처리기 속성에 작성하기

```html
<input type="button" value="click" onclick="console.log('Hello');" />
```

4. JavaScript : URL(자바스크립트 의사 프로토콜)

```html
<a href="javascript:console.log(' I\ ' m pretty good! ' );">
  What's going on?
</a>
```

## 겸손한 자바스크립트

겸손한 자바스크립트란 자바스크립트 코드와 HTML 코드를 분리하는 원칙을 말한다. 코드를 분리하려면 HTML head 요소에 script 요소를 배치하고 script 요소의 src 속성에 다른 파일에 작성한 자바스크립트 코드의 위치를 지정한다. 또한 스타일을 설정하는 CSS 코드도 다른 파일에 작성해서 읽어 들이도록 구성한다. 이렇게 구성하면 웹 페이지를 구성하는 세 가지 요소인 구조/스타일/동작을 각각 다른 장소에 분리해서 저장할 수 있다.

## 웹 브라우저에서의 자바스크립트 실행 순서

1. 웹 브라우저로 웹 페이지를 열면 가장 먼저 Window 객체가 생성된다. Window 객체는 웹 페이지의 전역 객체로 웹 페이지와 탭마다 생성된다
2. Document 객체가 Window 객체의 프로퍼티로 생성되며 웹 페이지를 해석하여 DOM 트리의 구축을 시도한다. Document 객체는 readyState 프로퍼티를 가지고 있으며, 이 프로퍼티에는 HTML 문서의 해석 상태를 뜻하는 문자열이 저장된다. readyState 프로퍼티의 초깃값은 "loading"이라는 문자열이다
3. HTML 문서는 HTML 구문을 작성 순서에 따라 분석하며 Document 객체 요소와 텍스트 노드를 추가해 나간다
4. HTML 문서 안에 script 요소가 있으면 script 요소 안의 코드 또는 외부 파일에 저장된 코드의 구문을 분석한다. 그 결과 오루가 오류가 발생하지 않으면 그 시점에 코드를 실행한다. 이때 script 요소는 동기적으로 실행된다. 즉, script 요소의 구문을 분석해서 실행할 때는 html 문서의 구문 분석이 일시적으로 막히고, 자바스크립트 코드의 실행을 완료한 후에는 일시적으로 막혀 있었던 HTML 문서의 구문 분석을 재개한다
5. HTML 문서의 모든 내용을 읽은 후에 DOM 트리 구축을 완료하면 document.readyState 프로퍼티 값이 "interactive"로 바뀐다
6. 웹 브라우저는 Document 객체에 DOM 트리 구축 완료를 알리기 위해 DOMContentLoaded 이벤트를 발생시킨다
7. img 등의 요소가 이미지 파일 등의 외부 리소스를 읽어 들여야 한다면 이 시점에 읽어 드린다
8. 모든 리소스를 읽어 들인 후에는 document.readyState 프로퍼티 값이 "complete"로 바뀐다. 마지막으로 웹 브라우저는 Window 객체를 상대로 load 이벤트를 발생시킨다 -> window.onload
9. 이 시점부터 다양한 이벤트(사용자 정의 이벤트, 네트워크 이벤트)를 수신하며, 이벤트가 발생하면 이벤트 처리기가 비동기로 호출된다

## async와 defer 속성

async와 defer 속성은 script 요소의 논리 속성으로 HTML5부터 추가된 속성이다. 둘 다 src 속성을 가진 script 요소에는 적용할 수 있지만 인라인 스크립트에는 사용할 수 없다. 이들 속성을 사용하면 자바스크립트 코드를 실행할 때 HTML 구문 분석을 막지 않는다.

## CSS와 렌더링

1. style 요소 안에 작성된 CSS 코드와 link 요소로 읽어 들인 CSS 코드를 CSS 파서가 분석한다. 구문 분석이 끝난 CSS 코드는 스타일 규칙으로 만들어진다. 여기에서 파서란 구문을 분석하는 소프트웨어를 말한다
2. HTML 코드로 만들어진 DOM 트리와 스타일 규칙을 바탕으로 렌더 트리라는 도 다른 트리를 만든다. 렌더 트리에는 표시해야 하는 요소만 저장되며, 렌더 트리에 저장된 요소에는 스타일 정보를 추가한다
3. 렌더 트리가 만들어진 후에는 DOM의 각 노드 위치와 크기를 결정한다
4. 마지막으로 DOM의 각 노드를 렌더 트리의 스타일 정보를 바탕으로 그린다. 앞의 과정은 HTML 문서를 다 읽어 들인 후에 실행되지 않고 HTML 문서를 읽어 들이는 과정에서 단계적으로 실행된다

## 크로스 브라우징 대책

es5를 지원하지 않는 오래된 웹 브라우저에서도 문제없이 웹 페이지를 표시하고 같은 기능을 사용할 수 있도록 대응하는 작업을 가리켜 크로스 브라우징 대책이라고 한다.

1. 기능성 테스트
2. 브라우저 테스트
3. 라이브러리를 사용해서 대응하기 ex) jQuery

## Window 객체

- 클라이언트 측 자바스크립트에서 Window 객체는 전역 객체이다
- 'window.' 부분은 생략 가능하다

## Location 객체

- Location 객체는 창에 표시되는 문서의 URL을 관리한다
- Location 객체는 window.location 또는 location으로 참조 가능하다. document.location 또한 Location 객체를 참조한다

## Location 객체의 사용

1. 해당 url이 가리키는 문서를 읽어 들인다

```javascript
location.href = "http://www.example.com";
location.assign("http://www.example.com");
//같은 표현
// 두 코드는 모두 읽어 들이기 이전의 URL을 이력으로 남기므로, 뒤로 가기 버튼을 사용해서 되돌아갈 수 있다
```

2. URL이 가리키는 문서를 읽어 들일 때 이력을 남기지 않으려면 replace 메서드를 사용한다

```javascript
location.replace("http://www.example.com");
// 이때는 읽어 들이기 이전의 URL이 이력에서 삭제되므로 뒤로 가기 버튼으로 되돌아갈 수 없다
```

3. URL에는 상대 경로를 지정할 수도 있다. 상대 경로를 지정하면 이전 웹 페이지의 사이트 루트에 대한 상대 URL로 인식한다

```javascript
setTimeout(function () {
  location.replace("http://www.example.com");
}, 3000);
```

4. reload 메서드를 사용하면 현재의 페이지를 다시 읽어 들일 수 있다

```javascript
location.reload();
```

5. hash 프로퍼티에 HTML 요소의 id 속성 값을 대입하면 그 HTML 요소로 스크롤한다

```javascript
location.hash = "#header";
```

6. search 프로퍼티 값을 바꾸면 서버에 질의 문자열을 보낸다

```javascript
location.search = "what";
// url 끝에 ?what을 덧붙여 서버에 보낸다
```

## History 객체

- History 객체는 창의 웹 페이지 열람 이력을 관리한다

## URL 인코딩

- url 인코딩이란 문자열의 문자 코드를 정렬하여 16진수로 바꾼 후에 각 바이트에 % 기호를 붙여서 표기하는 작업을 말한다. 질의 문자열은 URL 인코딩되어 서버로 전송된다
- encodeURIComponent와 decodeURIComponent 함수는 문자, 숫자, 이스케이프 하지 않은 기호를 완전히 URL 인코딩/디코딩 한다
- encodeURI와 decodeURI 함수는 몇몇 문자를 URL 인코딩/디코딩하지 않는다
- encodeURI 함수는 &, +, =을 인코딩하지 않으므로 HTTP 통신에 적합한 GET 요청과 POST 요청을 만들 수 없다. 반면에 encodeURIComponent 함수는 이런 문자도 인코딩한다

## History 객체의 사용

1. 웹 페이지 열람 이력을 진행하거나 되돌아갈 때는 back과 forward 메서드를 사용한다

```javascript
history.back(); // 웹 페이지 열람 이력을 하나 되돌아간다
history.forward(); // 웹 페이지 열람 이력을 하나 진행한다
```

2. 건너뛸 횟수를 지정해서 웹 페이지 이력을 진행하거나 되돌아갈 대는 go 메서드를 사용한다

```javascript
history.go(-3);
history.go(2);
```

3. 페이지를 전환하지 않고 웹 페이지 열람 이력만 추가하고자 할 때는 pushState 메서드를 사용한다

```javascript
history.pushState(null, null, "page2.html");
```

## Navigator 객체

- Navigator 객체는 스크립트가 실행 중인 웹 브라우저의 애플리케이션 정보를 관리한다
- Navigator 객체는 브라우저 테스트에 활용한다

## Screen 객체

Screen 객체는 화면(모니터) 크기와 색상 등의 정보를 관리한다

## Document 객체

Document 객체는 창에 표시되고 있는 웹 페이지를 관리한다. 이 객체로 웹 페이지의 내용물인 DOM 트리를 읽거나 쓸 수 있다

## 창 제어하기

각각의 창과 탭은 별도의 브라우징 컨텍스트(사용자에게 표시되는 환경)를 제공한다. 각 브라우징 컨텍스트는 별도의 Window 객체를 가진다. 각 브라우징 컨텍스트는 상호 간에 독립적이며 다른 브라우징 컨텍스트에 간섭할 수 없다. 하지만 브라우징 컨텍스트가 새로운 브라우징 컨텍스트를 열때 부모 브라우징 컨텍스트와 자식 브라우징 컨텍스트 간 상호작용이 가능하다

## 다른 창 참조

부모 창과 부모 창이 open 메서드로 연 자식 창은 서로의 Window 객체를 참조할 수 있다. 그러면 상대 프로퍼티와 메서드를 참조할 수 있다. 그러나 상호 간에 참조할 수 있는 경우는 동일 출처 정책을 만졸할 때로 한정된다

```javascript
w = open("newpage.html", "new page", "width=400, height=300");
w.document.body.style.backgroundColor = "green"; //자식 창의 배경을 녹색으로 만듬

opener.document.body.style.backgroundColor = "red"; // 부모 창의 배경색을 빨간색으로 만듦
```

## 동일 출처 정책

동일 출처 정책이란 웹 페이지 위에서 동작하는 프로그램 출처와 그 프로그램이 읽으려고 시도하는 데이터 출처가 서로 다를 경우에 리소스 간의 상호작용을 제한하는 정책을 말한다. 웹에서는 다음 세가지 조건을 모두 충족하는 리소스를 가리켜 출처가 같은 리소스라고 한다

- 프로토콜이 같다
- 포트 번호가 같다
- 호스트 이름이 같다
