const a = new Int8Array(10);

console.log(a.length);
console.log(a.BYTES_PER_ELEMENT);

console.log(a);

const buffer = new ArrayBuffer(100);
const b = new Int16Array(buffer);
console.log(b.length);

const c = new Int16Array(10);
for (let i = 0; i < 10; i++) {
  c[i] = i;
}
const d = new Int16Array(c);
//d에 c의 복사본이 할당

console.log(b);
console.log(a === b);

const e = [1, 2, 3, 4, 5];
const f = new Float64Array(e);
console.log(f);
for (let v of f) console.log(v);

const g = new Int8Array(10);
const buffer_g = g.buffer;
console.log(buffer_g.byteLength);

const buffer_ = new ArrayBuffer(24);
const person = {
  id: new Uint32Array(buffer, 0, 1),
  name: new Uint8Array(buffer, 4, 16),
  weight: new Float32Array(buffer, 20, 1),
};
console.log(person);
