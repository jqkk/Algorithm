import Stack from "./Stack";

describe("Stack", () => {
  it("push 1 2 3 4", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.toString()).toBe("4,3,2,1");
  });

  it("pop test", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    expect(stack.pop()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.toString()).toBe("1");
  });

  it("peek test", () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);

    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  it("check empty", () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    stack.push(2);

    expect(stack.isEmpty()).toBe(false);
  });

  it("stack to array", () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});
