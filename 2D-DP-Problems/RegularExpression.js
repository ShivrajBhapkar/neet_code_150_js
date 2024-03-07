function MathRegularExpression(str1, str2) {
    const row = str1.length;
    const col = str2.length;
    const dp = Array.from({ length: row + 1 }, () =>
        Array(col + 1).fill(false)
    );
    dp[0][0] = true;
    for (let i = 2; i <= col; i++) {
        if (str2[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2];
        }
    }
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (str2[j - 1] === '*') {
                if (dp[i][j - 2] === true) {
                    dp[i][j] = true;
                } else if (str2[j - 2] === '.' || str2[j - 2] === str1[i - 1]) {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
    }
    return dp[row][col];
}

const result = MathRegularExpression("aa", "a*");
console.log(result);
