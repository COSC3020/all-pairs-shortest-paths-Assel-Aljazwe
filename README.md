[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/2i4vCRmk)
# All Pairs Shortest Paths

In the lectures, we've seen Dijkstra's algorithm for finding the shortest paths
from a given vertex to all other vertices in the graph. We've also covered the
Floyd-Warshall algorithm for finding the shortest path between all *pairs* of
vertices. It works as follows:

Given a graph $G = (V, E)$ with weighted edges:
- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
- for each vertex $v \in V$, `dist[v][v] = 0`
- for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
- for each vertex $k\in V$:
    - for each vertex $i\in V$:
        - for each vertex $j\in V$:
            - `if dist[i][j] > dist[i][k] + dist[k][j]:`
              `dist[i][j] = dist[i][k] + dist[k][j]`

Implement this algorithm, starting with the template I provided in `code.js`.
The function takes a weighted graph graph and returns the matrix with the
distances, as described above. You can choose any data structures you like for
the implementation.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case time complexity ($\Theta$) of the algorithm? Add your
answer, including your reasoning, to this markdown file.

# Runtime Analysis of the Floyd-Warshall Algorithm

To perform a runtime analysis of the Floyd-Warshall algorithm implementation, we can examine the nested loops structure since it's the most significant contributor to the overall time complexity.

## Floyd-Warshall Algorithm Structure

The core of the Floyd-Warshall algorithm consists of three nested loops, each iterating over all vertices in the graph. Given a graph $G = \(V, E\)$ with $|V|\$ vertices:

1. **Outer loop** iterates over each vertex $k \in V\$, considered an intermediate vertex in potential paths.
2. **Middle loop** iterates over each vertex $i \in V\$, representing the start of a path.
3. **Inner loop** iterates over each vertex $j \in V\$, represents the end of a path.

Within the innermost loop, the algorithm updates the $dist[i][j]$ value if a shorter path is found from the intermediate vertex $k\$.

## Time Complexity Analysis

Since each of the three nested loops runs $|V|\$ times independently, the total number of iterations performed by the algorithm is $|V|^3\$. No other operations inside the loops significantly affect the overall time complexity, as the comparison and update operations are executed in constant time.

### Worst-Case Time Complexity

The worst-case time complexity of the Floyd-Warshall algorithm, is $\Theta(|V|^3)\$. Meaning that the algorithm's runtime grows cubically as a function of the number of vertices in the graph in the worst case.

## Conclusion

The Floyd-Warshall algorithm has a high time complexity because it goes through every possible combination of three vertices in the graph to find the shortest paths. This $\Theta(|V|^3)\$ complexity makes the algorithm well-suited for dense graphs where it's important to look closely at the relationships between all pairs of vertices. However, for sparse graphs or when the number of vertices is large, the cubic time complexity can make the Floyd-Warshall algorithm less suitable/practical compared to other shortest path algorithms that might utilize the graph's structure more efficiently.

**Reference**: https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/


