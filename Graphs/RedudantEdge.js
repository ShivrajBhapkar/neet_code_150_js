function FindReduantEdge(edges) {
    const rows = edges.length;
    const cols = edges[0].length;
    const parent = [];
    const rank = [];
    for (let i = 0; i <= rows; i++) {
        parent[i] = i;
        rank[i] = 1;
    }

    for (let curr of edges) {
        const parentFirst = FindParent(curr[0], parent);
        const parentSecond = FindParent(curr[1], parent);
        if (parentFirst === parentSecond) {
            return curr;
        } else if (rank[parentFirst] > rank[parentSecond]) {
            parent[parentSecond] = parentFirst;
        } else if (rank[parentSecond] > rank[parentFirst]) {
            parent[parentFirst] = parentSecond;
        } else {
            parent[parentFirst] = parentSecond;
            rank[parentSecond]++;
        }
    }
    function FindParent(curr, parent) {
        if (parent[curr] != curr) {
            parent[curr] = FindParent(parent[curr], parent);
        }
        return parent[curr];
    }
    return [];
}
const result = FindReduantEdge([
    [1, 2],
    [1, 3],
    [2, 3],
]);
console.log(result);
