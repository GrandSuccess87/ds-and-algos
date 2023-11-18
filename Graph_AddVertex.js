class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      return undefined;
    }
  }

  addEdge(vertex1, vertex2) {
    if (typeof vertex1 !== string || typeof vertex2 !== string)
      return undefined;
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex1])
      return false;
    // filter out the vertex2 from vertex1, so it'll keep everything that doesn't equal vertex2
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    return this.adjacencyList;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return false;
    // loop through the vertex's edges
    // remove the vertex from the edges
    // delete the vertex
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];

    // if (this.adjacencyList[vertex1]) {
    //   const index = this.adjacencyList[vertex1].indexOf(vertex2);
    //   this.adjacencyList[vertex1] = this.adjacencyList[vertex1].splice(
    //     index,
    //     1
    //   );
    // }

    // if (this.adjacencyList[vertex2]) {
    //   const index = this.adjacencyList[vertex2].indexOf(vertex1);
    //   this.adjacencyList[vertex2].splice(index, 1);
    // }
    // for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
    //   this.removeEdge(vertex, this.adjacencyList[vertex][i]);
    // }
    //   return this.adjacencyList;

    // return this.adjacencyList[vertex].map((element) =>
    //   this.removeEdge(element, vertex)
    // );

    // if (typeof vertex1 !== string || typeof vertex2 !== string)
    // return undefined;
  }

  //  Traversal
  // Depth First Search / Traveral - visit all neighbors first
  // Recursive Approach
  // Create a function that accepts a starting node, create a list to store the end result, create an object to store visited vertices
  DFSRecursive(vertex) {
    const results = [];
    const visited = {};
    this.DFSHelper(vertex, visited, results);
    return results;
  }
  // Create a helper function to do the following:
  // push the vertex into the results hash map that we'll return at the end, mark the vertex as visited
  // loop through the values of the vertex's edges/neighbors
  // check if they have been visited
  // if not, recursively call the function on that vertex
  DFSHelper(vertex, visited, results) {
    if (!vertex) console.log("vertex is undefined");
    visited[vertex] = true;
    results.push(vertex);
    this.adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[vertex]) this.DFSHelper(neighbor, visited, results);
    });
    return results;
  }

  DFSRecursive(vertex) {
    const results = [];
    const visited = {};
    // this is the graph, have to declare it here because it's in a different scope in the helper function
    const adjacencyList = this.adjacencyList;

    (function DFSHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return DFSHelper(neighbor);
      });
    })(vertex); // IIFE - Immediately Invoked Function Expression - call the function right away with the vertex
    return results;
  }

  BFS(start) {
    const queue = [start];
    const results = [];
    const visited = { start: true };
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        // this.adjacencyList[currentVertex].slice().reverse().forEach((neighbor) => { // reverse the order of the neighbors
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return results;
  }

  // Interative Approach
  // BF Traversal
}
