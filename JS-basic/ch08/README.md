## 함수를 정의하는 방법

1. 함수 선언문으로 정의하는 방법

```javaScript
  function square(x) {return x*x}
```

2. 함수 리터럴로 정의하는 방법

```javaScript
  const square = function(x) {return x*x; };
```

3. Function 생성자로 정의하는 방법

```javaScript
  const square = new Function('x','return x*x')
```

4. 화살표 함수 표현식으로 정의하는 방법

```javaScript
  const square = x => x*x;
```

## 중첩 함수

특정 함수의 내부에 선언된 함수를 가리켜 그 함수의 중첩 함수라고 한다. C나 Java 등에서는 중첩 함수를 사용할 수 없지만 JS에서는 중첩 함수를 사용할 수 있다. 그러나 외부함수의 최상위 레벨에만 중첩 함수를 작성할 수 있다.(**함수 안의 if 문과 while 문 등의 문장 블록 안에는 중첩 함수를 작성할 수 없다**)

## 함수를 호출하는 방법

1. 함수 호출

```javaScript
  const s = square(5)
```

2. 메서드 호출

```javaScript
  obj.m = function() { ... }
  obj.m()
```

3. 생성자 호출

```javaScript
  const obj = new Object();
```

4. call, apply를 사용한 간접 호출
