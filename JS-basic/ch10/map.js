//map 객체는 데이터를 수집하여 활용하기 위한 객체이다

var map = new Map();
console.log(map);

var zip = new Map([
  ["Tom", "131-8634"],
  ["Huck", "566-0002"],
]);
console.log(zip);

function* makeZip() {
  yield ["Tom", "131-8634"];
  yield ["Huck", "566-0002"];
}
var zips = makeZip();
zip = new Map(zips);
console.log(zip);

console.log(zip.size);

var zip = new Map();
zip.set("Tom", "131-8634");
zip.set("Huck", "556-0002");
console.log(zip);

console.log(zip.get("Tom"));
console.log(zip.get("Kim"));

console.log(zip.has("Tom"));
console.log(zip.has("Becky"));

// zip.delete("Huck");
// console.log(zip);

// zip.clear();
// console.log(zip);

var iter = zip.keys();
for (let v of iter) console.log(v);

var iter = zip.values();
for (let v of iter) console.log(v);

var iter = zip.entries();
for (let v of iter) console.log(v);

for (let v of zip) console.log(v);

for (let [key, value] of zip) console.log(key, value);

zip.forEach(function (value, key, map) {
  console.log(key + " => " + value);
});
