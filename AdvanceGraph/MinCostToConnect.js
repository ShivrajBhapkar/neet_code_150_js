class Edge {
    constructor(src, dest) {
        this.src = src;
        this.dest = dest;
        this.wt = Math.abs(src[0] - dest[0]) + Math.abs(src[1] - dest[1]);
    }

    compareTo(otherEdge) {
        return this.wt - otherEdge.wt;
    }
}

class Solution {
    init(points, graph, map, n) {
        for (let i = 0; i < n; i++) {
            graph[i] = [];
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    graph[i].push(new Edge(points[i], points[j]));
                }
            }
        }
        for (let i = 0; i < n; i++) {
            map.set(points[i], i);
        }
    }

    FindMinCost(points) {
        const n = points.length;
        const graph = new Array(n);
        const map = new Map();
        this.init(points, graph, map, n);
        const visited = new Map();
        const pq = [];
        pq.push(new Edge(points[0], points[0]));
        let min = 0;
        while (pq.length > 0) {
            pq.sort((a, b) => a.compareTo(b)); // Sort the priority queue based on edge weight
            const curr = pq.shift();
            if (!visited.get(curr.dest)) {
                min += curr.wt;
                visited.set(curr.dest, true);
                const indx = map.get(curr.dest);
                for (let j = 0; j < graph[indx].length; j++) {
                    const e = graph[indx][j];
                    pq.push(new Edge(e.src, e.dest));
                }
            }
        }
        return min;
    }
}

const solution = new Solution();
const points1 = [
    [0, 0],
    [2, 2],
    [3, 10],
    [5, 2],
    [7, 0],
];
const points2 = [
    [3, 12],
    [-2, 5],
    [-4, 1],
];
console.log(solution.FindMinCost(points1)); // Output: 20
console.log(solution.FindMinCost(points2));
