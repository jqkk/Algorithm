var p = { x: 1, y: 2 };
console.log(p);
p = null;
//가비지 컬렉터는 객체{x:1, y:2}를 메모리에서 해제한다.

//가비지 컬렉션 : 사용하지 않는 객체가 차지하는 메모리 영역은 가비지 컬렉터가 자동으로 해제한다

// 순환 참조 : 객체의 참조가 가리키는 객체를 거슬러 올라갔을 때 그 끝에 기다리고 있는 객체가 객체 자신인 상태
var p = { x: 0, y: 0 },
  q = { x: 0, y: 1 };
p.next = q;
q.next = p;
// 고립된 순환 참조가 되면 각 객체가 서로 참조하므로 참조 카운터 방식으로는 가비지 컬렉션을 할 수 없다
// 최근에는 마크 앤 스윕 알고리즘을 사용한다(전역 객체가 참조할 수 없는 객체 검색)
