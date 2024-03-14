function FindFlow(ocean) {
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const rows = ocean.length;
    const cols = ocean[0].length;
    const pacificOcean = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );
    const AtlanticOcean = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );
    for (let i = 0; i < rows; i++) {
        DFS(i, 0, pacificOcean);
        DFS(i, cols - 1, AtlanticOcean);
    }
    for (let i = 0; i < cols; i++) {
        DFS(0, i, pacificOcean);
        DFS(rows - 1, i, AtlanticOcean);
    }
    function DFS(row, col, visited) {
        visited[row][col] = true;
        for (let i = 0; i < 4; i++) {
            let newRow = row + dx[i];
            let newCol = col + dy[i];
            if (Isvalid(newRow, newCol, visited)) {
                if (ocean[row][col] <= ocean[newRow][newCol]) {
                    DFS(newRow, newCol, visited);
                }
            }
        }
    }
    function Isvalid(row, col, visited) {
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            visited[row][col]
        ) {
            return false;
        }
        return true;
    }
    const result = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacificOcean[i][j] && AtlanticOcean[i][j]) {
                result.push([i, j]);
            }
        }
    }
    return result;
}
const result = FindFlow([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
]);
console.log(result);
