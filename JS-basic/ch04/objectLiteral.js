//객체 리터럴로 객체 생성하기
var card = { suit: "하트", rank: "A" };
//{"suit": "하트", "rank":"A"}와 의미가 같다
console.log(card.suit);
console.log(card["rank"]);

console.log(card.color); //객체에 없는 프로퍼티를 읽으려고 시도하면 undefined를 반환

card.value = 14; //프로퍼티 추가
console.log(card);

delete card.rank; //프로퍼티 삭제
console.log(card);

card.suit = "다이아"; //프로퍼티 수정
console.log(card);

console.log("suit" in card);
console.log("rank" in card);
console.log("toString" in card); //모든 객체는 Object 객체를 상속받기 때문에
