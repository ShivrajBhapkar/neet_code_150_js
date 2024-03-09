function EditDistance(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const dp = Array.from({ length: len2 + 1 }, () => Array(len1 + 1).fill(0));
    for (let i = 1; i <= len2; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i <= len2; i++) {
        dp[i][0] = i;
    }

    for (let i = 1; i <= len2; i++) {
        for (let j = 1; j <= len1; j++) {
            if (word2[i - 1] === word1[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                let replace = 1 + dp[i - 1][j - 1];
                let deletion = 1 + dp[i][j - 1];
                let insertion = 1 + dp[i - 1][j];
                let min = Math.min(replace, deletion, insertion);
                dp[i][j] = min;
            }
        }
    }
    return dp[len2][len1];
}

const result = EditDistance("intention", "execution");
console.log(result);
