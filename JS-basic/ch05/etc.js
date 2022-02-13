const s = "ABC";
console.log(typeof s);

let a = 5;
const parity = a % 2 == 0 ? "짝수" : "홀수";
console.log(parity);

const formula = "x*x";
eval("function f(x) { return " + formula + "; }");
console.log(f(10));

const num = 5858;
console.log(typeof num.toString());

console.log("3.14" + 7);
console.log(parseInt("3.14") + 7);
console.log(typeof Number("3.14"));
