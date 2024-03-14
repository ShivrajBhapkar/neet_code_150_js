class Solution {
    constructor() {
        this.adj = [];
    }

    canFinish(numCourses, prerequisites) {
        for (let i = 0; i < numCourses; i++) {
            this.adj[i] = [];
        }

        for (let i = 0; i < prerequisites.length; i++) {
            let source = prerequisites[i][0];
            let destination = prerequisites[i][1];
            this.adj[source].push(destination);
        }

        const visited = Array(numCourses).fill(false);
        const stack = Array(numCourses).fill(false);
        let isCycle = false;
        for (let i = 0; i < numCourses; i++) {
            if (!visited[i]) {
                if (this.DFS(i, visited, stack)) {
                    isCycle = true;
                    break;
                }
            }
        }
        return !isCycle;
    }
    DFS(curr, visited, stack) {
        visited[curr] = true;
        stack[curr] = true;

        for (const neighbours of this.adj[curr]) {
            if (!visited[neighbours]) {
                if (this.DFS(neighbours, visited, stack)) {
                    return true;
                }
            } else if (stack[neighbours] === true) {
                return true;
            }
        }
        stack[curr] = false;
        return false;
    }
}
const solution = new Solution();
const numCourses = 4;
const prerequisites = [
    [1, 0],
    [2, 1],
    [3, 2],
    [1, 3],
];
// const numCourses = 2;
// const prerequisites = [[1, 0]];

console.log(solution.canFinish(numCourses, prerequisites));
