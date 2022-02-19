console.log(JSON.stringify({}));
console.log(JSON.stringify(3.14));
console.log(JSON.stringify("abc"));
console.log(JSON.stringify(true));
console.log(JSON.stringify({ x: 1, y: 2 }));
console.log(JSON.stringify({ x: 1, y: 2, z: 3 }, ["x", "z"]));
console.log(JSON.stringify({ x: 1, y: 2 }, null, "\t"));

console.log(JSON.parse("[2,4,null]"));
console.log(JSON.parse('{"x":1,"y":2}'));
const o = { name: "Tom", age: 17, marriage: false, data: [2, 5, null] };
const s = JSON.stringify(0);
const p = JSON.parse(s);
