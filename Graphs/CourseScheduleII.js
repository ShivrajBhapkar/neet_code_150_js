class Solution {
    constructor() {
        this.adj = [];
    }

    FindSchedule(courses, prerequisites) {
        for (let i = 0; i < courses; i++) {
            this.adj[i] = [];
        }
        for (let i = 0; i < prerequisites.length; i++) {
            let src = prerequisites[i][1];
            let dest = prerequisites[i][0];
            this.adj[src].push(dest);
        }
        const visited = Array(courses).fill(false);
        const stack = Array(courses).fill(false);
        const result = [];
        for (let i = 0; i < courses; i++) {
            if (!visited[i]) {
                if (this.DFS(i, visited, stack, result)) {
                    return [];
                }
            }
        }
        const newresult = [];
        for (let i = 0; i < courses; i++) {
            newresult[i] = result[courses - i - 1];
        }
        return newresult;
    }
    DFS(curr, visited, stack, result) {
        visited[curr] = true;
        stack[curr] = true;
        for (const neighbour of this.adj[curr]) {
            if (!visited[neighbour]) {
                this.DFS(neighbour, visited, stack, result);
            } else if (stack[neighbour]) {
                return true;
            }
        }
        stack[curr] = false;
        result.push(curr);
        return false;
    }
}
const solution = new Solution();
const answer = solution.FindSchedule(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
]);
console.log(answer);
