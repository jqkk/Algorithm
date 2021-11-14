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
});
