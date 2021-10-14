import Trie from "./Trie";

describe("Trie", () => {
  it("create trie", () => {
    const trie = new Trie();

    expect(trie).toBeDefined();
    expect(trie.head.toString()).toBe("*");
  });

  it("add word", () => {
    const trie = new Trie();

    trie.addWord("cat");
    expect(trie.head.toString()).toBe("*:c");
    expect(trie.head.getChild("c").toString()).toBe("c:a");

    trie.addWord("car");
    expect(trie.head.toString()).toBe("*:c");
    expect(trie.head.getChild("c").toString()).toBe("c:a");
    expect(trie.head.getChild("c").getChild("a").toString()).toBe("a:t,r");
    expect(trie.head.getChild("c").getChild("a").getChild("t").toString()).toBe(
      "t*"
    );
  });

  it("delete word", () => {
    const trie = new Trie();

    trie.addWord("carpet");
    trie.addWord("car");
    trie.addWord("cat");
    trie.addWord("cart");

    expect(trie.doesWordExist("carpet")).toBe(true);
    expect(trie.doesWordExist("car")).toBe(true);
    expect(trie.doesWordExist("cat")).toBe(true);
    expect(trie.doesWordExist("cart")).toBe(true);

    trie.deleteWord("carpool");
    expect(trie.doesWordExist("carpet")).toBe(true);
    expect(trie.doesWordExist("car")).toBe(true);
    expect(trie.doesWordExist("cart")).toBe(true);
    expect(trie.doesWordExist("cat")).toBe(true);

    trie.deleteWord("car");
    expect(trie.doesWordExist("carpet")).toBe(true);
    expect(trie.doesWordExist("car")).toBe(false);
    expect(trie.doesWordExist("cart")).toBe(true);
    expect(trie.doesWordExist("cat")).toBe(true);
  });

  it("suggests next characters", () => {
    const trie = new Trie();

    trie.addWord("cat");
    trie.addWord("cats");
    trie.addWord("car");
    trie.addWord("caption");

    expect(trie.suggestNextCharacters("ca")).toEqual(["t", "r", "p"]);
    expect(trie.suggestNextCharacters("cat")).toEqual(["s"]);
    expect(trie.suggestNextCharacters("cab")).toBeNull();
  });
});
