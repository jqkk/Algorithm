import TrieNode from "./TrieNode";

describe("TrieNode", () => {
  it("create trie node", () => {
    const trieNode = new TrieNode("c", true);

    expect(trieNode.character).toBe("c");
    expect(trieNode.isCompleteWord).toBe(true);
    expect(trieNode.toString()).toBe("c*");
  });

  it("add child", () => {
    const trieNode = new TrieNode("c");

    trieNode.addChild("a");
    trieNode.addChild("b");

    expect(trieNode.getChild("a").toString()).toBe("a");
    expect(trieNode.getChild("b").toString()).toBe("b");
    expect(trieNode.toString()).toBe("c:a,b");
  });

  it("duplicate child case", () => {
    const trieNode = new TrieNode("c");

    trieNode.addChild("a");
    trieNode.addChild("a");

    expect(trieNode.suggestChildren()).toEqual(["a"]);
  });

  it("check if node has children", () => {
    const trieNode = new TrieNode("c");

    expect(trieNode.hasChildren()).toBe(false);

    trieNode.addChild("a");

    expect(trieNode.hasChildren()).toBe(true);
    expect(trieNode.hasChild("a")).toBe(true);
    expect(trieNode.hasChild("c")).toBe(false);
  });

  it("delete child node", () => {
    const trieNode = new TrieNode("c");

    trieNode.addChild("a");
    trieNode.removeChild("a");
    expect(trieNode.hasChild("a")).toBe(false);

    trieNode.addChild("a");
    const childNode = trieNode.getChild("a");
    childNode.addChild("r");

    trieNode.removeChild("a");
    expect(trieNode.hasChild("a")).toBe(true);
    //자식 노드가 자식 노드를 가질 경우 제거가 되지 않는다.

    trieNode.addChild("q", true);
    trieNode.removeChild("q");
    expect(trieNode.hasChild("q")).toBe(true);
    //자식 노드가 isCompleteWord일 경우 제거가 되지 않는다.
  });
});
