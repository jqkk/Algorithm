import DoublyLinkedList from "./DoublyLinkedList";

describe("DoublyLinkedList", () => {
  it("append 1,2,3,4", () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.toString()).toBe("1,2,3,4");
  });

  it("prepend 1,2,3,4", () => {
    const linkedList = new DoublyLinkedList();

    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);
    linkedList.prepend(4);

    expect(linkedList.toString()).toBe("4,3,2,1");
    expect(linkedList.tail.previous.value).toBe(2);
  });

  it("delete test", () => {
    const linkedList = new DoublyLinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);
    linkedList.prepend(4);

    expect(linkedList.toString()).toBe("4,3,2,1,1,2,3,4");

    let deletedNode = linkedList.delete(1);
    expect(deletedNode.value).toBe(1);
    expect(linkedList.toString()).toBe("4,3,2,2,3,4");

    deletedNode = linkedList.deleteHead();
    expect(deletedNode.value).toBe(4);
    expect(linkedList.toString()).toBe("3,2,2,3,4");

    deletedNode = linkedList.deleteTail();
    expect(deletedNode.value).toBe(4);
    expect(linkedList.toString()).toBe("3,2,2,3");
  });

  it("find test", () => {
    const linkedList = new DoublyLinkedList();

    linkedList.fromArray([1, 2, 3, 4, 5]);

    expect(linkedList.find({ value: 2 })).toBeDefined();
    expect(linkedList.find({ value: 6 })).toBeNull();
  });

  it("from Array to LinkedList", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.fromArray([1, 2, 3, 4, 5]);
    expect(linkedList.toString()).toBe("1,2,3,4,5");
  });

  it("reverse test", () => {
    const linkedList = new DoublyLinkedList();
    linkedList.fromArray([1, 2, 3, 4, 5]);
    linkedList.reverse();
    expect(linkedList.toString()).toBe("5,4,3,2,1");
  });
});
