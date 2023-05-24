// The businessTrip function takes a graph object representing the connections between cities and an array of cities representing the sequence of cities to visit.
function businessTrip(graph, cities) {
// We initialize the cost variable to keep track of the total cost of the trip.
  let cost = 0;


  for (let i = 0; i < cities.length - 1; i++) {
// We iterate through the cities array using a for loop, starting from the first city (cities[0]) and going up to the second-to-last city (cities.length - 1).

    

const currentCity = cities[i];
    const nextCity = cities[i + 1];

    if (!graph.nodes[currentCity] || !graph.nodes[currentCity][nextCity]) {
      return null;
    }
// For each pair of consecutive cities, we check if there is a direct connection between them in the graph object. If not, we return null indicating that the trip is not possible.

    cost += graph.nodes[currentCity][nextCity];
  }
// If there is a direct connection between the current city and the next city, we add the cost of the connection to the cost variable.

  return cost;
}

// ex
// we have a graph with a direct connection between "Metroville" and "Pandora" with a cost of 82. The cities array is ["Metroville", "Pandora"], and the expected output is 82.

const graph = {
  nodes: {
    Metroville: { Pandora: 82 },
    Pandora: { Metroville: 82 },
  },
};

const cities1 = ["Metroville", "Pandora"];
console.log(businessTrip(graph, cities1)); // Output: 82
