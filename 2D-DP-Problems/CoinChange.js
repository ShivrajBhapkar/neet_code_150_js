function CoinChange1(amount, coins) {
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

function CoinChange2(amount, coins) {
    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    return dp[amount];
}
const result1 = CoinChange1(5, [1, 2, 5]);
const result2 = CoinChange2(5, [1, 2, 5]);
console.log(result1);
console.log(result2);
