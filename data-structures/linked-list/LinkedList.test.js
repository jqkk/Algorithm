import LinkedList from "./LinkedList";

//describe() : 여러 개의 test() 코드를 하나의 테스트 작업 단위로 묶어주는 API

//test(), it() : 테스트 코드를 돌리기 위한 API

//expect() : 테스트 할 대상을 넣는 API(테스트 입력 값, 기대 값)

//toBe() : 테스트의 결과를 확인하는 API(테스트의 예산 결과 값을 넣는다.)

describe("LinkedList", () => {
  it("append 1,2,3,4", () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);

    expect(linkedList.toString()).toBe("1,2,3,4");
    expect(linkedList.tail.next).toBeNull();
  });

  it("prepend 1,2,3,4", () => {
    const linkedList = new LinkedList();

    linkedList.prepend(1);
    expect(linkedList.head.toString()).toBe("1");
    expect(linkedList.tail.toString()).toBe("1");

    linkedList.prepend(2);
    linkedList.prepend(3);
    linkedList.prepend(4);

    expect(linkedList.toString()).toBe("4,3,2,1");
    expect(linkedList.head.toString()).toBe("4");
    expect(linkedList.tail.toString()).toBe("1");
  });

  it("delete test", () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(5)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    let deletedNode = linkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(linkedList.toString()).toBe("1,1,2,4,5");

    deletedNode = linkedList.deleteHead();
    expect(deletedNode.value).toBe(1);
    expect(linkedList.toString()).toBe("1,2,4,5");

    deletedNode = linkedList.deleteTail();
    expect(deletedNode.value).toBe(5);
    expect(linkedList.toString()).toBe("1,2,4");
  });
});
