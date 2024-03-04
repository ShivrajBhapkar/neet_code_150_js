function FindPallindromicSubString(str) {
    let len = str.length;
    const dp = Array.from({ length: len }, () => Array(len).fill(false));
    let count = 0;
    for (let g = 0; g < len; g++) {
        for (let i = 0, j = g; j < len; i++, j++) {
            if (g === 0) {
                dp[i][j] = true;
                count++;
            } else if (g === 1) {
                if (str[i] === str[j]) {
                    dp[i][i] = true;
                    count++;
                } else {
                    dp[i][j] = false;
                }
            } else {
                if (str[i] === str[j] && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    count++;
                } else {
                    dp[i][j] = false;
                }
            }
        }
    }
    return count;
}

const substringcount = FindPallindromicSubString("aaa");
console.log(substringcount);