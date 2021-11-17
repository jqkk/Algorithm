export default class GraphEdge {
  constructor(startVertex, endVertex, weight = 0) {
    //기본 weight를 0으로 설정
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  getKey() {
    //연결을 반환
    const startVertexKey = this.startVertex.getKey();
    const endVertexKey = this.endVertex.getKey();

    return `${startVertexKey}_${endVertexKey}`;
  }

  reverse() {
    //edge 전환(startVertex와 endVertex를 swap)
    const tmp = this.startVertex;
    this.startVertex = this.endVertex;
    this.endVertex = tmp;

    return this;
  }

  toString() {
    //연결을 문자열로 변환
    return this.getKey();
  }
}
