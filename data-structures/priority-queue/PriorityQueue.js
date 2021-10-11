import MinHeap from "../heap/MinHeap";
import Comparator from "../../utils/Comparator";

export default class PriorityQueue extends MinHeap {
  constructor() {
    super();

    this.priorities = new Map();
    //Map()은 key-value쌍으로 저장되는 형식이다
    //객체와 다르게 문자열 아닌 값도 키로 사용 가능하다
    //key는 고유하다

    this.compare = new Comparator(this.comparePriority.bind(this));
    //bind ??
  }

  add(item, priority = 0) {
    //item, priority(우선순위)
    //추가
    this.priorities.set(item, priority);

    super.add(item);
    return this;
  }

  remove(item, customFindingComparator) {
    //삭제
    super.remove(item, customFindingComparator);
    this.priorities.delete(item);
    return this;
  }

  changePriority(item, priority) {
    //우선순위 변경
    this.remove(item, new Comparator(this.compareValue));
    this.add(item, priority);
    return this;
  }

  findByValue(item) {
    //item과 같은 값을 가진 트리 안의 노드들을 인덱스 배열로 가져옴
    return this.find(item, new Comparator(this.compareValue));
  }

  hasValue(item) {
    //트리에 item과 같은 값을 가진 노드가 존재하는지 판별
    return this.findByValue(item).length > 0;
  }

  comparePriority(a, b) {
    //우선순위 비교
    //우선순위가 높을수록 낮은 인덱스에 위치
    if (this.priorities.get(a) === this.priorities.get(b)) {
      return 0;
    }
    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
  }

  compareValue(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
}
