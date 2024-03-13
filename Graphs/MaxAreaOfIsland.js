function FindMaxArea(grid) {
    const row = grid.length;
    const col = grid[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    let max = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1 && visited[i][j] === false) {
                max = Math.max(max, DFS(i, j, visited));
            }
        }
    }
    function DFS(row, col, visited) {
        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            grid[row][col] === 0 ||
            visited[row][col]
        ) {
            return 0;
        }

        visited[row][col] = true;
        let sum = 1;
        for (let k = 0; k < 4; k++) {
            const newrow = row + dx[k];
            const newcol = col + dy[k];
            sum += DFS(newrow, newcol, visited);
        }
        return sum;
    }

    return max;
}
const result = FindMaxArea([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
console.log(result);
