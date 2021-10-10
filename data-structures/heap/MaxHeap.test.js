import MaxHeap from "./MaxHeap";
import Comparator from "../../utils/Comparator";

describe("MaxHeap", () => {
  it("create max heap", () => {
    const maxHeap = new MaxHeap();

    expect(maxHeap).toBeDefined();
    expect(maxHeap.peek()).toBeNull();
    expect(maxHeap.isEmpty()).toBe(true);
  });

  it("add item", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    expect(maxHeap.isEmpty()).toBe(false);
    expect(maxHeap.peek()).toBe(5);

    maxHeap.add(3);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe("5,3");

    maxHeap.add(10);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe("10,3,5");

    maxHeap.add(1);
    maxHeap.add(2);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe("10,3,5,1,2");

    expect(maxHeap.poll()).toBe(10);
    expect(maxHeap.toString()).toBe("5,3,2,1");

    expect(maxHeap.poll()).toBe(5);
    expect(maxHeap.toString()).toBe("3,1,2");
  });

  it("add item(2)", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);

    expect(maxHeap.toString()).toBe("12,3,10");
    maxHeap.add(11);
    expect(maxHeap.toString()).toBe("12,11,10,3");

    expect(maxHeap.poll()).toBe(12);
    expect(maxHeap.toString()).toBe("11,3,10");
  });

  it("find test", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);

    expect(maxHeap.toString()).toBe("12,3,10");
    maxHeap.add(11);
    maxHeap.add(11);
    expect(maxHeap.toString()).toBe("12,11,10,3,11");

    expect(maxHeap.find(5)).toEqual([]);
    expect(maxHeap.find(12)).toEqual([0]);
    expect(maxHeap.find(11)).toEqual([1, 4]);
  });

  it("remove test(heapify down)", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(5);
    expect(maxHeap.toString()).toBe("10,3,5");
    maxHeap.add(6);
    maxHeap.add(7);
    maxHeap.add(4);
    expect(maxHeap.toString()).toBe("10,7,5,3,6,4");
    maxHeap.add(6);
    maxHeap.add(8);
    maxHeap.add(2);
    maxHeap.add(1);

    expect(maxHeap.toString()).toBe("10,8,6,7,6,4,5,3,2,1");
    expect(maxHeap.remove(4).toString()).toBe("10,8,6,7,6,1,5,3,2");
    //heapify down
  });

  it("remove test(heapfiy up)", () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.toString()).toBe("12,11,10,3,11");
    expect(maxHeap.remove(12).toString()).toBe("11,11,10,3");
    //heapify up
  });
});
