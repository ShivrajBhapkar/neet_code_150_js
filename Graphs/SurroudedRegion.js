function FindRegion(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0 - 1, 0];
    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= cols; j++) {
            if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
                DFS(i, j);
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "O") {
                grid[i][j] = "X";
            } else if (grid[i][j] === "E") {
                grid[i][j] = "O";
            }
        }
    }
    function DFS(row, col) {
        if (IsInValid(row, col)) {
            return;
        }
        grid[row][col] = "E";
        for (let i = 0; i < 4; i++) {
            let newrow = row + dx[i];
            let newcol = col + dy[i];
            DFS(newrow, newcol);
        }
    }
    function IsInValid(row, col) {
        if (
            row < 0 ||
            row >= grid.length ||
            col < 0 ||
            col >= grid[0].length ||
            grid[row][col] != "O"
        ) {
            return true;
        }
    }
    return grid;
}
const result = FindRegion([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
]);
console.log(result);
