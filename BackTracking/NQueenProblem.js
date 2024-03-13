function FindNumberCombination(num) {
    const DP = Array.from({ length: num }, () => Array(num).fill("."));
    const result = [];
    function FindNumberCombinationUtil(col) {
        if (col === num) {
            const temp = DP.map((row) => row.join(""));
            result.push(temp);
            return;
        }
        for (let i = 0; i < num; i++) {
            if (IsSafe(i, col, DP)) {
                DP[i][col] = "Q";
                FindNumberCombinationUtil(col + 1);
                DP[i][col] = ".";
            }
        }
    }
    function IsSafe(row, col, DP) {
        for (let i = 0; i < row; i++) {
            if (DP[i][col] === "Q") {
                return false;
            }
        }
        for (let i = row + 1; i < num; i++) {
            if (DP[i][col] === "Q") {
                return false;
            }
        }
        for (let i = 0; i < col; i++) {
            if (DP[row][i] === "Q") {
                return false;
            }
        }
        for (let i = col + 1; i < num; i++) {
            if (DP[row][i] === "Q") {
                return false;
            }
        }
        for (let i = row + 1, j = col + 1; i < num && j < num; i++, j++) {
            if (DP[i][j] === "Q") {
                return false;
            }
        }
        for (let i = row + 1, j = col - 1; i < num && j >= 0; i++, j--) {
            if (DP[i][j] === "Q") {
                return false;
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (DP[i][j] === "Q") {
                return false;
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < num; i--, j++) {
            if (DP[i][j] === "Q") {
                return false;
            }
        }
        return true;
    }
    FindNumberCombinationUtil(0);
    return result;
}
const result = FindNumberCombination(4);
console.log(result);
