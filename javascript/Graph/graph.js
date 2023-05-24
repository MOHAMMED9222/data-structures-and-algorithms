class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  breadthFirst(startNode) {
    const visited = [];
    const queue = [startNode];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      visited.push(currentNode);

      const neighbors = this.adjacencyList[currentNode];
      for (let neighbor of neighbors) {
        if (!visited.includes(neighbor) && !queue.includes(neighbor)) {
          queue.push(neighbor);
        }
      }
    }

    return visited;
  }
}

// Example usage:
const graph = new Graph();
graph.addNode('Pandora');
graph.addNode('Arendelle');
graph.addNode('Metroville');
graph.addNode('Monstroplolis');
graph.addNode('Narnia');
graph.addNode('Naboo');

graph.addEdge('Pandora', 'Arendelle');
graph.addEdge('Arendelle', 'Metroville');
graph.addEdge('Metroville', 'Monstroplolis');
graph.addEdge('Metroville', 'Narnia');
graph.addEdge('Monstroplolis', 'Naboo');
graph.addEdge('Narnia', 'Naboo');

const result = graph.breadthFirst('Pandora');
console.log(result.join(', ')); // Output: Pandora, Arendelle, Metroville, Monstroplolis, Narnia, Naboo