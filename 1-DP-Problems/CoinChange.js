function FindMinCoinRequired(coins, targetAmount) {
    const len = coins.length;
    const Dp = Array.from({ length: len + 1 },()=> Array(targetAmount + 1).fill(0));
    for (let indx = 0; indx <= targetAmount; indx++) {
        Dp[0][indx] = Number.MAX_VALUE;
    }
    for (let indx = 0; indx <= len; indx++) {
        Dp[indx][0] = 0;
    }
    for (let indx = 1; indx <= len; indx++) {
        for (let indx1 = 1; indx1 <= targetAmount; indx1++) {
            if (indx1 >= coins[indx - 1]) {
                let pick = 1 + Dp[indx][indx1 - coins[indx - 1]];
                let notPick = Dp[indx - 1][indx1];
                Dp[indx][indx1] = Math.min(pick, notPick);
            } else {
                Dp[indx][indx1] = Dp[indx - 1][indx1];
            }
        }
    }

    if (Dp[len][targetAmount] === Number.MAX_VALUE) {
        return -1;
    }
    return Dp[len][targetAmount];
}
const result = FindMinCoinRequired([2], 3);
console.log(result);
