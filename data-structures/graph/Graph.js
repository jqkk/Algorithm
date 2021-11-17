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
    return vertex.getNeighbors();
  }

  getAllVertices() {
    //graph에 추가된 모든 vertex들을 배열로 반환
    return Object.values(this.vertices);
  }

  getAllEdges() {
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
    if (this.edges[edge.getKey()]) {
      delete this.edges[edge.getKey()];
    } else {
      throw new Error("Edge not found in graph");
    }

    const startVertex = this.getVertexByKey(edge.startVertex.getKey());
    const endVertex = this.getVertexByKey(edge.endVertex.getKey());

    startVertex.deleteEdge(edge);
    endVertex.deleteEdge(edge);
  }

  findEdge(startVertex, endVertex) {
    const vertex = this.getVertexByKey(startVertex.getKey());

    if (!vertex) {
      return null;
    }

    return vertex.findEdge(endVertex);
  }

  getWeight() {
    return this.getAllEdges().reduce((weight, graphEdge) => {
      return weight + graphEdge.weight;
    }, 0);
  }

  reverse() {
    this.getAllEdges().forEach((edge) => {
      this.deleteEdge(edge);

      edge.reverse();

      this.addEdge(edge);
    });

    return this;
  }

  getVerticesIndices() {
    const verticesIndices = {};
    this.getAllVertices().forEach((vertex, index) => {
      verticesIndices[vertex.getKey()] = index;
    });

    return verticesIndices;
  }

  getAdjacencyMatrix() {
    const vertices = this.getAllVertices();
    const verticesIndices = this.getVerticesIndices();

    const adjacencyMatrix = Array(vertices.lenght)
      .fill(null)
      .map(() => {
        return Array(vertices.length).fill(Infinity);
      });

    vertices.forEach((vertex, vertexIndex) => {
      vertex.getNeighbors().forEach((neighbor) => {
        const neighborIndex = verticesIndices[neighbor.getKey()];
        adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(
          vertex,
          neighbor
        ).weight;
      });
    });
    return adjacencyMatrix;
  }

  toString() {
    //graph에 추가된 vertex의 value값들을 출력
    return Object.keys(this.vertices).toString();
  }
}
