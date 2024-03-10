class Solution {
    longestIncreasingPath(matrix) {
        const row = matrix.length;
        const col = matrix[0].length;
        if (row === 1 && col === 1) {
            return 1;
        }

        let max = 0;
        const memo = new Array(row).fill(0).map(() => new Array(col).fill(0));

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (memo[i][j] === 0) {
                    max = Math.max(max, this.dfs(matrix, memo, i, j));
                }
            }
        }

        return max;
    }

    dfs(matrix, memo, x, y) {
        if (memo[x][y] > 0) {
            return memo[x][y];
        }

        const dirs = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        let ans = 1;

        const row = matrix.length;
        const col = matrix[0].length;

        for (const dir of dirs) {
            const nextX = x + dir[0];
            const nextY = y + dir[1];

            if (nextX < 0 || nextX >= row || nextY < 0 || nextY >= col) {
                continue;
            }

            if (matrix[nextX][nextY] >= matrix[x][y]) {
                continue;
            }

            ans = Math.max(ans, this.dfs(matrix, memo, nextX, nextY) + 1);
        }

        memo[x][y] = ans;
        return ans;
    }
}

// Example usage:
const solution = new Solution();
const matrix = [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1],
];
const result = solution.longestIncreasingPath(matrix);
console.log(result); // Should now output 4
