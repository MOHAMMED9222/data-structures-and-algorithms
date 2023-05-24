//define the node
//value property
//array for neighbors
class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}
// class represents the graph
// nodes object stores all the nodes inna graph
class Graph {
  constructor() {
    this.nodes = {};
  }

  breadthFirst(startNode) {
    // method takes 'startnode' as an argument n performs breadth-1st traversal
    const visited = [];
    const queue = [];
// arrays, visited to keep visited nodes n queue for start nodes to be visited


// We push the startNode to the queue and visited arrays.

    queue.push(startNode);
    visited.push(startNode);

    while (queue.length > 0) {
      // //While the queue is not empty, we:
      // Remove the first node from the queue using shift() and assign it to currentNode.
      // Iterate over the neighbors of currentNode.
      // If a neighbor node has not been visited, we add it to the visited array and push it to the queue.
      const currentNode = queue.shift();

      for (const neighbor of currentNode.neighbors) {
        if (!visited.includes(neighbor)) {
          visited.push(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return visited;
  }
}

//ex

// Test Case 1: Basic test case
const graph = new Graph();
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

node1.neighbors = [node2, node3];
node2.neighbors = [node4, node5];
node3.neighbors = [node6];
graph.nodes = { 1: node1, 2: node2, 3: node3, 4: node4, 5: node5, 6: node6 };

console.log(graph.breadthFirst(node1)); // Output: [node1, node2, node3, node4, node5, node6]

// we create a graph with 6 nodes and perform breadth-first traversal starting from node1. The expected output is the array of nodes [node1, node2, node3, node4, node5, node6]
