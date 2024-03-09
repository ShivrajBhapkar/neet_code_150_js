// Input: (m = 3), (n = 7);
// Output: 28;
function FindUniquePath(rows, cols) {
    function FindUniquePathUtil(row, col) {
        if (row === 1 || col === 1) {
            return 1;
        }
        return (
            FindUniquePathUtil(row - 1, col) + FindUniquePathUtil(row, col - 1)
        );
    }

    return FindUniquePathUtil(rows, cols);
}
function FindUniquePathByDp(rows, cols) {
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let i = 0; i < rows; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < cols; j++) {
        dp[0][j] = 1;
    }
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[rows - 1][cols - 1];
}
const result = FindUniquePath(3, 7);
const result1 = FindUniquePathByDp(3, 7);
console.log(result1);
console.log(result);
