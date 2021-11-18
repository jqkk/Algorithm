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

  it("find edge by vertex in undirected graph", () => {
    const graph = new Graph();

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB, 10);

    graph.addEdge(edgeAB);

    expect(graph.findEdge(vertexA, vertexB)).toEqual(edgeAB);
    expect(graph.findEdge(vertexB, vertexA)).toEqual(edgeAB);
    expect(graph.findEdge(vertexA, vertexC)).toBeNull();
  });

  it("find edge by vertex in directed graph", () => {
    const graph = new Graph(true);

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");

    const edgeAB = new GraphEdge(vertexA, vertexB, 10);
    graph.addEdge(edgeAB);

    expect(graph.findEdge(vertexB, vertexA)).toBeNull();
    expect(graph.findEdge(vertexA, vertexB)).toEqual(edgeAB);
  });

  it("return vertex neighbors", () => {
    const graph = new Graph(true);

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);

    graph.addEdge(edgeAB).addEdge(edgeAC);

    const neighbors = graph.getNeighbors(vertexA);

    expect(neighbors).toEqual([vertexB, vertexC]);
  });

  it("calculate total graph weight", () => {
    const graph = new Graph();

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");
    const vertexD = new GraphVertex("D");

    const edgeAB = new GraphEdge(vertexA, vertexB, 1);
    const edgeBC = new GraphEdge(vertexC, vertexC, 2);
    const edgeCD = new GraphEdge(vertexC, vertexD, 3);
    const edgeAD = new GraphEdge(vertexA, vertexD, 4);

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCD).addEdge(edgeAD);

    expect(graph.getWeight()).toBe(10);
  });

  it("delete edges from graph", () => {
    const graph = new Graph();

    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeAC = new GraphEdge(vertexA, vertexC);

    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeAC);

    expect(graph.getAllEdges()).toEqual([edgeAB, edgeBC, edgeAC]);

    graph.deleteEdge(edgeAB);

    expect(graph.getAllEdges()).toEqual([edgeBC, edgeAC]);
  });

  it("reverse graph", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");
    const vertexD = new GraphVertex("D");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeAC = new GraphEdge(vertexA, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);

    const graph = new Graph(true);

    graph.addEdge(edgeAB).addEdge(edgeAC).addEdge(edgeCD);

    expect(graph.toString()).toBe("A,B,C,D");

    expect(graph.getNeighbors(vertexA)).toEqual([vertexB, vertexC]);
    graph.reverse();
    expect(graph.getNeighbors(vertexA)).toEqual([]);
    expect(graph.getNeighbors(vertexB)).toEqual([vertexA]);
  });

  it("return vertex indices", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");
    const vertexD = new GraphVertex("D");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeBD = new GraphEdge(vertexB, vertexD);

    const graph = new Graph();
    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCD).addEdge(edgeBD);

    expect(graph.getVerticesIndices()).toEqual({ A: 0, B: 1, C: 2, D: 3 });
  });

  it("generate adjacency matrix for undirected graph", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");
    const vertexD = new GraphVertex("D");

    const edgeAB = new GraphEdge(vertexA, vertexB);
    const edgeBC = new GraphEdge(vertexB, vertexC);
    const edgeCD = new GraphEdge(vertexC, vertexD);
    const edgeBD = new GraphEdge(vertexB, vertexD);

    const graph = new Graph();
    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCD).addEdge(edgeBD);

    expect(graph.getAdjacencyMatrix()).toEqual([
      [Infinity, 0, Infinity, Infinity],
      [0, Infinity, 0, 0],
      [Infinity, 0, Infinity, 0],
      [Infinity, 0, 0, Infinity],
    ]);
  });

  it("generate adjacency matrix for directed graph", () => {
    const vertexA = new GraphVertex("A");
    const vertexB = new GraphVertex("B");
    const vertexC = new GraphVertex("C");
    const vertexD = new GraphVertex("D");

    const edgeAB = new GraphEdge(vertexA, vertexB, 2);
    const edgeBC = new GraphEdge(vertexB, vertexC, 1);
    const edgeCD = new GraphEdge(vertexC, vertexD, 5);
    const edgeBD = new GraphEdge(vertexB, vertexD, 7);

    const graph = new Graph(true);
    graph.addEdge(edgeAB).addEdge(edgeBC).addEdge(edgeCD).addEdge(edgeBD);

    expect(graph.getAdjacencyMatrix()).toEqual([
      [Infinity, 2, Infinity, Infinity],
      [Infinity, Infinity, 1, 7],
      [Infinity, Infinity, Infinity, 5],
      [Infinity, Infinity, Infinity, Infinity],
    ]);
  });
});
