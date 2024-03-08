function FindInterLeavingString(str1, str2, str3) {
    const rows = str1.length;
    const cols = str2.length;
    const dp = Array.from({ length: rows + 1 }, () =>
        Array(cols + 1).fill(false)
    );

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= cols; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true;
            } else if (i === 0 && str2[j - 1] === str3[j - 1]) {
                dp[i][j] = dp[i][j - 1];
            } else if (j === 0 && str1[i - 1] === str3[i - 1]) {
                dp[i][j] = dp[i - 1][j];
            } else if (
                str1[i - 1] === str3[i + j - 1] &&
                str2[j - 1] !== str3[i + j - 1]
            ) {
                dp[i][j] = dp[i - 1][j];
            } else if (
                str2[j - 1] === str3[i + j - 1] &&
                str1[i - 1] !== str3[i + j - 1]
            ) {
                dp[i][j] = dp[i][j - 1];
            } else if (
                str1[i - 1] === str3[i + j - 1] &&
                str2[j - 1] === str3[i + j - 1]
            ) {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            }
        }
    }

    return dp[rows][cols];
}
const result = FindInterLeavingString("aabcc", "dbbca", "aadbbcbcac");
console.log(result);
