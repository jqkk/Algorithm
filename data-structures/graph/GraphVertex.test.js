import GraphVertex from "./GraphVertex";
import GraphEdge from "./GraphEdge";

describe("GraphVertex", () => {
  it("create vertex", () => {
    const vertex = new GraphVertex("A");

    expect(vertex).toBeDefined();
    expect(vertex.value).toBe("A");
    expect(vertex.toString()).toBe("A");
    expect(vertex.getKey()).toBe("A");
  });

  it("add edges to vertex", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.hasEdge(edgeAB)).toBe(true);
    expect(vertexB.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.getEdges()[0].toString()).toBe("A_B");
  });
  it("delete edge", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    vertexA.addEdge(edgeAB).addEdge(edgeAC);

    expect(vertexA.hasEdge(edgeAB)).toBe(true);
    expect(vertexA.hasEdge(edgeAC)).toBe(true);
    expect(vertexA.getEdges().length).toBe(2);

    vertexA.deleteEdge(edgeAB);
    expect(vertexA.hasEdge(edgeAB)).toBe(false);
    expect(vertexA.hasEdge(edgeAC)).toBe(true);
    expect(vertexA.getEdges().length).toBe(1);
  });
  it("get neighbor", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    vertexA.addEdge(edgeAB).addEdge(edgeAC);

    expect(vertexB.getNeighbors()).toEqual([]);

    const neighbors = vertexA.getNeighbors();

    expect(neighbors.length).toBe(2);
    expect(neighbors[0]).toBe(vertexB);
    expect(neighbors[1]).toBe(vertexC);

    expect(vertexA.hasNeighbor(vertexB)).toBe(true);
    expect(vertexB.hasNeighbor(vertexA)).toBe(false);
  });
  it("find edge", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.findEdge(vertexB)).toEqual(edgeAB);
    expect(vertexA.findEdge(vertexC)).toBeNull();
  });
  it("calculate vertex degree", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");

    expect(vertexA.getDegree()).toBe(0);

    const edgeAB = new GraphEdge(vertexA, vertexB);
    vertexA.addEdge(edgeAB);

    expect(vertexA.getDegree()).toBe(1);
  });
});
