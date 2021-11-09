//생성자로 객체 생성하기
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

var card = new Card("하트", "A");
console.log(card);

//new 연산자로 객체를 생성할 것이라 기대하고 만든 함수를 생성자라고 부름
//생성자는 관례적으로 첫글자로 대문자를 사용한다

//생성자와 new 연산자로 생성한 객체를 그 생성자의 인스턴스라고 부른다
//인스턴스 => 실체
var card1 = new Card("하트", "A");
var card2 = new Card("클럽", "K");
var card3 = new Card("스페이드", "2");

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius * this.radius;
    //메서드 안에서 this를 사용하면 그 값이 인스턴스의 프로퍼티임을 명시할 수 있다
  };
}
var p = { x: 0, y: 0 };
var c = new Circle(p, 2.0);
console.log("넓이 = ", c.area());
