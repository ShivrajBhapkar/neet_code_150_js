function FindWays(str) {
    const len = str.length;
    if (len === 0) {
        return 0;
    }
    const dp = Array(len).fill(0);
    dp[0] = 1;
    for (let indx = 1; indx < len; indx++) {
        const oneDigit = parseInt(str.substring(indx, indx + 1));
        const twoDigit = parseInt(str.substring(indx - 1, indx + 1));
        if (oneDigit >= 1 && oneDigit <= 9) {
            dp[indx] += dp[indx - 1];
        }
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[indx] += indx >= 2 ? dp[indx - 2] : 1;
        }
    }
  return  dp[len - 1];
}
const result = FindWays("12");
console.log(result);