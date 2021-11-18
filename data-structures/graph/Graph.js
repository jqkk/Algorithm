export default class Graph {
  constructor(isDirected = false) {
    //isDirected는 디폴트로 false
    //direct는 방향성을 나타냄
    this.vertices = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  addVertex(newVertex) {
    //vertex 추가
    this.vertices[newVertex.getKey()] = newVertex;

    return this;
  }

  getVertexByKey(vertexKey) {
    //인수로 들어온 vertexKey를 바탕으로 그에 해당하는 vertex를 반환
    return this.vertices[vertexKey];
  }

  getNeighbors(vertex) {
    //인수로 들어온 vertex와 edge로 연결된 배열 반환
    return vertex.getNeighbors();
  }

  getAllVertices() {
    //graph에 추가된 모든 vertex들을 배열로 반환
    return Object.values(this.vertices);
  }

  getAllEdges() {
    //graph의 모든 edge들을 배열로 반환
    return Object.values(this.edges);
  }

  addEdge(edge) {
    let startVertex = this.getVertexByKey(edge.startVertex.getKey());
    let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    if (!startVertex) {
      //graph에 startVertex가 삽입되지 않은 경우
      this.addVertex(edge.startVertex);
      startVertex = this.getVertexByKey(edge.startVertex.getKey());
    }

    if (!endVertex) {
      //graph에 endVertex가 삽입되지 않은 경우
      this.addVertex(edge.endVertex);
      endVertex = this.getVertexByKey(edge.endVertex.getKey());
    }

    if (this.edges[edge.getKey()]) {
      //edge가 이미 이전에 삽입된 경우
      throw new Error("Edge has already been added before");
    } else {
      this.edges[edge.getKey()] = edge;
    }

    if (this.isDirected) {
      //direct graph인 경우
      startVertex.addEdge(edge);
    } else {
      //indirected graph인 경우
      startVertex.addEdge(edge);
      endVertex.addEdge(edge);
    }

    return this;
  }

  deleteEdge(edge) {
    //edge 삭제
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error("Edge not found in graph");
    }

    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
    //해당 vertex의 edge관계 제거
  }

  findEdge(startVertex, endVertex) {
    //인수로 들어온 startVertex와 endVertex를 연결하고 있는 edge 반환
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (!vertex) {
      return null;
    }

    return vertex.findEdge(endVertex);
  }

  getWeight() {
    //graph의 모든 edge의 합을 구하여 반환
    return this.getAllEdges().reduce((weight, graphEdge) => {
      return weight + graphEdge.weight;
    }, 0);
  }

  reverse() {
    this.getAllEdges().forEach((edge) => {
      this.deleteEdge(edge);
      //기존 edge들을 제거하고
      edge.reverse();
      //edge를 reverse한 후
      this.addEdge(edge);
      //reverse한 edge를 삽입한다
    });

    return this;
  }

  getVerticesIndices() {
    //vertex value : index의 객체 형태로 반환
    const verticesIndices = {};
    this.getAllVertices().forEach((vertex, index) => {
      verticesIndices[vertex.getKey()] = index;
    });

    return verticesIndices;
  }

  getAdjacencyMatrix() {
    //인접행렬 구하기
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    const adjacencyMatrix = Array(vertices.length)
      .fill(null)
      .map(() => {
        return Array(vertices.length).fill(Infinity);
      });
    //크기가 vertex들의 length x vertex들의 length인 2차원 배열 생성

    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndex = verticesIndices[neighbor.getKey()];
        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(
          vertex,
          neighbor
        ).weight;
        //adjacencyMatrix[startVertex의 index, endVertex의 index]에 edge의 weight를 대입
      });
    });
    return adjacencyMatrix;
  }

  toString() {
    //graph에 추가된 vertex의 value값들을 출력
    return Object.keys(this.vertices).toString();
  }
}
