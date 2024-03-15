const { floydWarshall } = require('./code');

// Test case 1: Simple graph
const graph1 = [
    [Infinity, 5, Infinity, 10],
    [Infinity, Infinity, 3, Infinity],
    [Infinity, Infinity, Infinity, 1],
    [Infinity, Infinity, Infinity, Infinity]
];
const expected1 = [
    [0, 5, 8, 9],
    [Infinity, 0, 3, 4],
    [Infinity, Infinity, 0, 1],
    [Infinity, Infinity, Infinity, 0]
];

// Test case 2: Graph with negative edge weights
const graph2 = [
    [Infinity, 1, Infinity],
    [Infinity, Infinity, -2],
    [4, Infinity, 0]
];
const expected2 = [
    [0, 1, -1],
    [5, 0, -2],
    [4, 5, 0]
];

const tests = [
    { graph: graph1, expected: expected1, description: 'Simple graph' },
    { graph: graph2, expected: expected2, description: 'Graph with negative edge weights' },
];

tests.forEach(({ graph, expected, description }, index) => {
    const result = floydWarshall(graph);
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `Test ${index + 1}: ${description} failed. Expected ${JSON.stringify(expected)}, got ${JSON.stringify(result)}.`);
});

console.log('All tests passed!');
