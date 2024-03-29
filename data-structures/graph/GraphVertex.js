import LinkedList from "../linked-list/LinkedList";

export default class GraphVertex {
  constructor(value) {
    if (value === undefined) {
      //value값이 들어오지 않았다면 에러를 발생시킴
      throw new Error("Graph vertex must have a value");
    }

    const edgeComparator = (edgeA, edgeB) => {
      if (edgeA.getKey() === edgeB.getKey()) {
        return 0;
      }
      return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
    };

    this.value = value;
    this.edges = new LinkedList(edgeComparator);
    //edges는 연결리스트
  }

  addEdge(edge) {
    //Edge 연결
    this.edges.append(edge);

    return this;
  }

  deleteEdge(edge) {
    //Edge 삭제
    this.edges.delete(edge);
  }

  getNeighbors() {
    //해당 Vertex에 Edge로 연결된 Vertex 배열 반환
    const edges = this.edges.toArray();

    const neighborsConverter = (node) => {
      return node.value.startVertex === this
        ? node.value.endVertex
        : node.value.startVertex;
    };

    return edges.map(neighborsConverter);
  }

  getEdges() {
    //해당 vertex의 edge 배열을 반환
    return this.edges.toArray().map((linkedListNode) => linkedListNode.value);
  }

  getDegree() {
    //해당 vertex에 연결된 edge 갯수 반환
    return this.edges.toArray().length;
  }

  hasEdge(requiredEdge) {
    //edge 찾기
    const edgeNode = this.edges.find({
      callback: (edge) => edge === requiredEdge,
    });

    return !!edgeNode;
  }

  hasNeighbor(vertex) {
    //파라미터(인자)로 들어온 vertex가 이웃으로 존재하는지 확인
    const vertexNode = this.edges.find({
      callback: (edge) =>
        edge.startVertex === vertex || edge.endVertex === vertex,
    });

    return !!vertexNode;
    //노드가 있다면 true, 없다면 false
  }

  findEdge(vertex) {
    //해당 vertex와 인수로 들어온 vertex의 edge를 찾음
    const edgeFinder = (edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    };

    const edge = this.edges.find({ callback: edgeFinder });

    return edge ? edge.value : null;
  }

  getKey() {
    //Vertex의 value값을 반환
    return this.value;
  }

  deleteAllEdges() {
    //Vertex에 연결된 모든 Edge 삭제
    this.getEdges().forEach((edge) => this.deleteEdge(edge));

    return this;
  }

  toString(callback) {
    //Vertex의 value값을 반환
    return callback ? callback(this.value) : `${this.value}`;
  }
}
