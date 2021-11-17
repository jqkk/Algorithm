import GraphEdge from "./GraphEdge";
import GraphVertex from "./GraphVertex";

describe("GraphEdge", () => {
  it("create graph edge", () => {
    const startVertex = new GraphVertex("A");
    const endVertex = new GraphVertex("B");
    const edge = new GraphEdge(startVertex, endVertex);

    expect(edge.getKey()).toBe("A_B");
    expect(edge.weight).toEqual(0);
  });

  it("reverse edge", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const edge = new GraphEdge(vertexA, vertexB, 10);

    expect(edge.startVertex).toEqual(vertexA);
    expect(edge.endVertex).toEqual(vertexB);

    edge.reverse();

    expect(edge.startVertex).toEqual(vertexB);
    expect(edge.endVertex).toEqual(vertexA);
    expect(edge.weight).toEqual(10);
  });
});
