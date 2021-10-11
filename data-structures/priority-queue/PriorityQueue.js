import MinHeap from "../heap/MinHeap";
import Comparator from "../../utils/Comparator";

export default class PriorityQueue extends MinHeap {
  constructor() {
    super();

    this.priorities = new Map();
    //Map()은 key-value쌍으로 저장되는 형식이다
    //객체와 다르게 문자열 아닌 값도 키로 사용 가능하다

    this.compare = new Comparator(this.comparePriority.bind(this));
  }

  add(item, priority = 0) {
    this.priorities.set(item, priority);
    super.add(item);
    return this;
  }

  remove(item, customFindingComparator) {
    super.remove(item, customFindingComparator);
    this.priorites.delete(item);
    return this;
  }

  changePriority(item, priority) {
    this.remove(item, new Comparator(this.compareValue));
    this.add(item, priority);
    return this;
  }

  findByValue(item) {
    return this.find(item, new Comparator(this.compareValue));
  }

  hasValue(item) {
    return this.findByValue(item).length > 0;
  }

  comparePriority(a, b) {
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
