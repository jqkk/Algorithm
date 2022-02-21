//Set 객체는 중복되지 않는 유일한 데이터를 수집하여 활용하기 위한 객체이다
//집합

var set = new Set();
console.log(set);

var zip = new Set(["131-8634", "556-0002"]);
console.log(zip);

function* makeZip() {
  yield "131-8634";
  yield "556-0002";
}
var zips = makeZip();
zip = new Set(zips);
console.log(zip);

console.log(zip.size);

var zip = new Set();
zip.add("131-8634");
zip.add("556-0002");
console.log(zip);

console.log(zip.has("131-8634"));
console.log(zip.has("556-0000"));

// zip.delete("131-8634");
// console.log(zip);

// zip.clear();
// console.log(zip);

var iter = zip.keys();
for (let v of iter) console.log(v);

var iter = zip.entries();
for (let v of iter) console.log(v);

for (let v of zip) console.log(v);

zip.forEach(function (value1, value2, map) {
  console.log(value1 + " => " + value2);
});
