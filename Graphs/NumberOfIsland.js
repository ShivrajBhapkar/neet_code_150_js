function NumberIsland(grid) {
    let row = grid.length;
    let col = grid[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    let count = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (visited[i][j] === false && grid[i][j] === "1") {
                count++;
                DFS(i, j, visited);
            }
        }
    }

    function DFS(row, col, visited) {
        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            visited[row][col] ||
            grid[row][col] === "0"
        ) {
            return;
        }
        visited[row][col] = true;

        for (let i = 0; i < 4; i++) {
            let newrow = row + dx[i];
            let newcol = col + dy[i];
            DFS(newrow, newcol, visited);
        }
    }
    return count;
}

const grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
];
const result = NumberIsland(grid);
console.log(result);
