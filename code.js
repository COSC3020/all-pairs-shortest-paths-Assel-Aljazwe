function floydWarshall(graph) {
    const numVertices = graph.length;
    const dist = Array.from({ length: numVertices }, () => Array(numVertices).fill(Infinity));

    // Initialize distances using graph
    for (let i = 0; i < numVertices; i++) {
        dist[i][i] = 0;
        for (const [j, weight] of graph[i].entries()) {
            if (weight !== Infinity && weight !== undefined) dist[i][j] = weight;
        }
    }

    // Floyd-Warshall algorithm
    for (let k = 0; k < numVertices; k++) {
        for (let i = 0; i < numVertices; i++) {
            for (let j = 0; j < numVertices; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    return dist;
}

module.exports = { floydWarshall };

