## 객체

- 이름과 값을 한 쌍으로 묶은 데이터를 여러 개 모은 것
- **객체에 포함된 데이터 하나(key-value)을 가리켜 객체의 프로퍼티라고 부름**
- 객체를 생성하는 법
  - 객체 리터럴 사용
  - 생성자 함수 사용

## 함수

일련의 처리를 하나로 모아 언제든 호출할 수 있도록 만들어 둔 것

- **return문 다음에는 줄바꿈 문자를 넣지 말 것**<br>
  (세미콜론을 자동으로 추가해서 해석함)
  ```javaScript
  return
  x * x;
  ```
  ```javaScript
  return;
  x * x;
  ```
- 함수를 호출할 때 전달하는 값을 인수(argument), 함수 정의문의 인수를 인자(parameter)라고 부름

## 함수 선언문

```javaScript
function square(x){
  return x * x;
}
```

## 함수 리터럴

- 함수 리터럴은 이름이 없는 함수이므로 익명 함수 또는 무명 함수라고 부른다
- 함수 선언문에서는 끝에 세미콜론을 붙일 필요가 없지만 함수 리터럴을 사용할 때는 끝에 반드시 세미콜론을 붙여야 한다
- 함수 선언문으로 정의한 함수는 끌어올리지만 함수 리터럴로 정의한 함수는 끌어올리지 않는다

  ```javaScript
  var square = function() { return x*x; };
  ```

## let과 const

- let과 const는 ES6부터 추가된 변수 선언자로 모두가 "블록 유효 범위"를 갖는 변수를 선언한다({}안에서만 유효)
- let은 변수를 선언하고 const는 한 번만 할당할 수 있는 상수를 선언함
- var문과 달리 let문으로 선언한 변수를 끌어올리지 않는다
- const문은 반드시 초기화해야한다

## 함수 스코프(function-level scope) vs 블록 스코프(block-level scope)

1. 함수 스코프(var)

- 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없다. 즉, 함수 내부에서 선언한 변수는 지역 변수이며 함수 외부에서 선언한 변수는 모두 전역 변수이다.
  ```javaScript
  var foo = 123;  //전역 변수
  console.log(foo)  //123
  {
  var foo = 456 //전역 변수
  }
  console.log(foo)  //456
  ```

2. 블록 스코프(const, let)

- 모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등) 내에서 선언된 변수는 코드 블록내에서만 유효하며 코드 블록 외부에서는 참조할 수 없다. 즉 코드 블록 내부에서 선언한 변수는 지역 변수이다.
  ```javaScript
  let foo = 123; //전역변수
  {
    let foo = 456;  //지역 변수
    let bar  456;   //지역 변수
  }
  console.log(foo)  //123
  console.log(bar)  //error
  ```

## 메서드

- 프로퍼티에 저장된 값의 타입이 함수면 그 프로퍼티를 메서드라고 부름
- 메서드는 일반적으로 메서드가 속한 객체의 내부 데이터(프로퍼티 값)상태를 바꾸는 용도로 사용

## 배열

- **자바스크립트의 배열은 Array 객체이며 객체로 배열의 기능을 가상으로 흉내낸 것이다**
- Array 객체는 배열의 인덱스를 문자열로 변환해서 그것을 프로퍼티로 이용한다

```

```