## 생성자

생성자는 new 연산자와 함께 사용하여 객체를 생성하는 함수이다

## 생성자를 정의하는 방법

1. 함수 선언문으로 정의하는 방법

```javascript
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}
Card.prototype.show = function () {
  console.log(this.suit + this.rank);
};
```

2. 함수 리터럴로 정의하는 방법

```javascript
var Card = function (suit, rank) {
  this.suit = suit;
  this.rank = rank;
};

Card.prototype.show = function () {
  console.log(this.suit + this.rank);
};
```

3. 클래스 선언문으로 정의하는 방법

```javascript
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
  show() {
    console.log(this.suit + this.rank);
  }
}
```

4. 클래스 표현식으로 정의하는 방법

```javascript
const Card = class {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
  show() {
    console.log(this.suit + this.rank);
  }
};
```

## 클래스 선언문과 함수 선언문의 차이

- 클래스 선언문은 자바스크립트 엔진이 끌어올리지 않는다. 따라서 생성자를 사용하기 전에 클래스 선언문을 작성해야 한다
- 클래스 선언문은 한 번만 작성할 수 있다. 같은 이름을 가진 클래스 선언문을 두 번 이상 작성하면 타입 오류가 발생한다
- 클래스 선언문에 정의한 생성자만 따로 호출할 수 없다
