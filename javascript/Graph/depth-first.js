class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.nodes = {};
  }

  //The depthFirst method in the Graph class performs a pre-order depth-first traversal starting from the given startNode.
  depthFirst(startNode) {
    const visited = [];

    function traverse(node) {
      // The traversal is implemented recursively using a helper function called traverse.

      visited.push(node);
// Inside the traverse function, we push the current node to the visited array.

      for (const neighbor of node.neighbors) {
        // We then iterate over the neighbors of the current node and recursively call the traverse function on each neighbor, but only if the neighbor has not been visited yet.

        if (!visited.includes(neighbor)) {
          traverse(neighbor);
          // Finally, we call the traverse function with the startNode to initiate the depth-first traversal.

        }
      }
    }

    traverse(startNode);

    return visited;
  }
}

// Test Case 1: Basic test case
const graph = new Graph();
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');
const nodeH = new Node('H');

nodeA.neighbors = [nodeB, nodeD, nodeG];
nodeB.neighbors = [nodeC];
nodeC.neighbors = [];
nodeD.neighbors = [nodeE, nodeF];
nodeE.neighbors = [];
nodeF.neighbors = [nodeH];
nodeG.neighbors = [];
nodeH.neighbors = [];

graph.nodes = {
  A: nodeA,
  B: nodeB,
  C: nodeC,
  D: nodeD,
  E: nodeE,
  F: nodeF,
  G: nodeG,
  H: nodeH
};

console.log(graph.depthFirst(nodeA)); // Output: [nodeA, nodeB, nodeC, nodeD, nodeE, nodeF, nodeH, nodeG]

