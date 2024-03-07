function CoinChange(amount, coins) {
    const len = coins.length;
    const dp = Array.from({ length: len }, () => Array(amount + 1).fill(0));
    dp[0][0] = 1;
    for (let indx = 1; indx <= amount; indx++) {
        if (indx >= coins[0]) {
            dp[0][indx] = dp[0][indx - coins[0]];
        } else {
            dp[0][indx] = 0;
        }
    }
    for (let indx = 1; indx < len; indx++) {
        dp[indx][0] = 1;
    }
    for (let i = 1; i < len; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i]) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[len - 1][amount];
}

const result = CoinChange(5, [1, 2, 5]);
console.log(result);
