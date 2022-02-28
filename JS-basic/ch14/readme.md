## DOM 트리

웹 페이지의 내용은 Document 객체가 관리한다. 웹 브라우저가 웹 페이지를 읽어 들이면 렌더링 엔진은 웹 페이지의 HTML 문서 구문을 해석하고 Document 객체에서 문서 내용을 관리하는 DOM 트리라고 하는 객체의 트리 구조를 만든다

## id 속성으로 노드 가져오기

HTML 문서의 요소에는 id 속성을 지정할 수 있다. id 속성 값은 문서에서 유일한 값이어야 한다. id 속성 값으로 요소 하나를 가리킬 수 있다

```javascript
document.getElementsById(id 값);
```

## 요소의 이름으로 노드 가져오기

아래 메서드를 사용하면 인수로 넘긴 문자열과 같은 이름을 가진 태그 목록을 가져올 수 있다. 태그의 이름은 대소문자를 구별하지 않는다

```javascript
document.getElementsByTagName(요소의 태그 이름);
```

## class 속성 값으로 노드 가져오기

```javascript
document.getElementsByClassName(class의 이름);
```

## name 속성 값으로 노드 가져오기

name 속성 값은 class 속성 값과 마찬가지로 요소 여러 개를 대상으로 같은 값(이름)을 사용할 수 있다

```javascript
document.getElementsByName(name 속성 값);
```

## querySelectorAll 메서드

- 인수로 넘긴 css 선택자와 일치하는 요소 객체가 담긴 NodeList를 가져올 수 있다
- getElementsByTagName 메서드 등이 반환하는 NodeList와 달리 querySelectorAll 메서드가 반환하는 NodeList는 '살아 있는 상태'가 아니다. NodeList에 포함된 요소는 메서드를 호출한 시점에 일치한 요소이다

## 요소 객체의 프로퍼티를 활용한 요소의 속성 값 표현

HTML 요소의 속성 이름은 대소문자를 구분하지 않지만 자바스크립트 요소 객체의 속성 프로퍼티는 대소문자를 구분한다. HTML 요소의 속성을 요소 객체의 속성 프로퍼티로 상요할 때는 소문자로 작성한다. 단, 속성 이름이 여러 단어로 구성되었다면 두 번째 이후 단어의 첫 글자를 대문자로 표기한 프로퍼티 이름을 사용한다. 몇몇 HTML 속성의 이름은 자바스크립트에서 예약어로 사용하고 있는 이름이다. 따라서 이런 경우에는 속성 이름 앞에 html을 덧붙인다. 단, class 속성은 특별한 취급을 받으며 자바스크립트에서는 className 프로퍼티를 사용한다

## 요소 내용

1. 요소 안의 HTML 코드 -> innerHTML 프로퍼티로 읽고 쓸 수 있다
2. 요소를 웹 페이지에 표시할 때의 텍스트 정보 -> textContent와 innerText 프로퍼티를 사용해서 읽고 쓸 수 있다
3. 요소 객체 안의 노드의 계층 구조

## textContent

textContent 프로퍼티는 요소의 내용을 웹 페이지에 표시했을 때의 텍스트 정보를 표시한다. textContent 프로퍼티 값은 지정한 요소의 자식 노드인 모든 텍스트 노드를 연결한 값이다

## textContent와 innerText의 차이

- textContent는 script 요소 안의 텍스트를 반환하지만 innerText는 반환하지 않는다
- textContent는 공백 문자를 그대로 반환하지만 innerText는 남은 공백 문자를 제거한다
- innerText는 table, tbody, tr 요소 등의 테이블 요소를 수정할 수 없다
