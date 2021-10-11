import PriorityQueue from "../priority-queue/PriorityQueue";

describe("PriorityQueue", () => {
  it("create", () => {
    const priorityQueue = new PriorityQueue();

    expect(priorityQueue).toBeDefined();
  });

  it("add test", () => {
    const priorityQueue = new PriorityQueue();
    //우선순위가 높을수록 낮은 인덱스에 위치

    priorityQueue.add(10, 1);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(5, 2);
    expect(priorityQueue.peek()).toBe(10);

    priorityQueue.add(100, 0);
    expect(priorityQueue.peek()).toBe(100);

    priorityQueue.add(97, 0);
    expect(priorityQueue.peek()).toBe(100);
    expect(priorityQueue.toString()).toBe("100,97,10,5");
  });

  it("add test(2)", () => {
    const priorityQueue = new PriorityQueue();

    const user1 = "Mike";
    const user2 = "Bill";
    const user3 = "Jane";
    const user4 = "Kim";
    const user5 = "Lee";
    const user6 = "Park";
    const user7 = "V";

    priorityQueue.add(user1, 10);
    priorityQueue.add(user2, 6);
    priorityQueue.add(user3, 7);
    priorityQueue.add(user4, 11);
    priorityQueue.add(user5, 11);
    priorityQueue.add(user6, 8);
    priorityQueue.add(user7, 9);

    expect(priorityQueue.toString()).toBe(
      `${user2},${user1},${user3},${user4},${user5},${user6},${user7}`
    );
  });

  it("poll test", () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    expect(priorityQueue.toString()).toBe("100,200,10,5");
    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
    expect(priorityQueue.poll()).toBe(5);
  });

  it("change priority test", () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    priorityQueue.add(200, 3);
    //일반적으로 키를 중복해서 넣으면 안된다

    expect(priorityQueue.toString()).toBe("100,200,10,5,200");

    priorityQueue.changePriority(200, 10);
    //끝에 200을 삭제한 후 이전의 200을 삭제함
    expect(priorityQueue.toString()).toBe("100,5,10,200");
  });

  it("hasValue() test", () => {
    const priorityQueue = new PriorityQueue();

    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);

    expect(priorityQueue.hasValue(5)).toBe(true)
    expect(priorityQueue.hasValue(20)).toBe(false)
  });
});
