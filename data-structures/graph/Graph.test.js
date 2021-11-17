import Graph from "./Graph";
import GraphVertex from "./GraphVertex";
import GraphEdge from "./GraphEdge";

describe("Graph", () => {
  it("add Vertex to graph", () => {
    const graph = new Graph();

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");

    graph.addVertex(vertexA).addVertex(vertexB);

    expect(graph.toString()).toBe("A,B");
    expect(graph.getVertexByKey(vertexA.getKey())).toEqual(vertexA);
    expect(graph.getVertexByKey(vertexB.getKey())).toEqual(vertexB);
  });

  it("add edges to undirected graph", () => {
    const graph = new Graph();

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");

    const edgeAB = new GraphEdge(vertexA, vertexB);

    graph.addEdge(edgeAB);

    expect(graph.getAllVertices()).toEqual([vertexA, vertexB]);

    expect(vertexA.getNeighbors()).toEqual([vertexB]);
    expect(vertexB.getNeighbors()).toEqual([vertexA]);
  });

  it("add edges to directed graph", () => {
    const graph = new Graph(true);

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");

    const edgeAB = new GraphEdge(vertexA, vertexB);

    graph.addEdge(edgeAB);
    expect(graph.getAllVertices()).toEqual([vertexA, vertexB]);

    expect(vertexA.getNeighbors()).toEqual([vertexB]);
    expect(vertexB.getNeighbors()).toEqual([]);
  });
});
