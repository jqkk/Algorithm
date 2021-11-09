var card = { suit: "하트", rank: "A" };
var a = card;

console.log(card.suit);
a.suit = "스페이드";
console.log(a.suit);
console.log(card.suit);
