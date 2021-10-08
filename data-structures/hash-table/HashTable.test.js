import HashTable from "./HashTable";

describe("HashTable", () => {
  it("create hash table", () => {
    const defaultHashTable = new HashTable();
    expect(defaultHashTable.buckets.length).toBe(32);

    const biggerHashTable = new HashTable(64);
    expect(biggerHashTable.buckets.length).toBe(64);
  });

  it("generate hash", () => {
    const hashTable = new HashTable();

    expect(hashTable.hash("a")).toBe(1);
    //a는 아스키코드로 97이다
    //97을 32로 나누면 나머지는 1이 된다.
    expect(hashTable.hash("b")).toBe(2);
    expect(hashTable.hash("abc")).toBe(6);
  });

  it("set, read data", () => {
    const hashTable = new HashTable();

    hashTable.set("a", "sky-old");
    hashTable.set("a", "sky");
    hashTable.set("b", "sea");
    hashTable.set("c", "earth");
    hashTable.set("d", "ocean");

    expect(hashTable.has("x")).toBe(false);
    expect(hashTable.has("a")).toBe(true);

    const stringifier = (value) => `${value.key}:${value.value}`;

    expect(hashTable.buckets[1].toString(stringifier)).toBe("a:sky");
    expect(hashTable.buckets[2].toString(stringifier)).toBe("b:sea");
    expect(hashTable.buckets[3].toString(stringifier)).toBe("c:earth");
    expect(hashTable.buckets[4].toString(stringifier)).toBe("d:ocean");

    expect(hashTable.get("a")).toBe("sky");
    expect(hashTable.get("d")).toBe("ocean");
    expect(hashTable.get("x")).not.toBeDefined();

    hashTable.delete("a");

    expect(hashTable.delete("not-existing")).toBeNull();
    expect(hashTable.get("a")).not.toBeDefined();

    hashTable.set("objectKey", { prop1: "a", prop2: "b" });

    const object = hashTable.get("objectKey");
    expect(object).toBeDefined();
    expect(object.prop1).toBe("a");
    expect(object.prop2).toBe("b");
  });
});
