function FindDistinctSequence(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const dp = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    for (let j = 0; j <= len2; j++) {
        dp[0][j] = 0;
    }
    for (let i = 0; i <= len1; i++) {
        dp[i][0] = 1;
    }
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[len1][len2];
}

const result = FindDistinctSequence("babgbag", "bag");
console.log(result);
