function LongestPallindrome(str) {
    const len = str.length;
    let dp = Array.from({ length: len }, () => Array(len).fill(false));
    let palstr = "";
    for (let g = 0; g < len; g++) {
        for (let i = 0, j = g; j < len; i++, j++) {
            if (g === 0) {
                dp[i][j] = true;
                if (palstr === "" || palstr.length < j - i + 1) {
                    palstr = str.substring(i, j + 1);
                }
            } else if (g === 1) {
                if (str[i] === str[j]) {
                    dp[i][j] = true;
                    if (palstr === "" || palstr.length < j - i + 1) {
                        palstr = str.substring(i, j + 1);
                    }
                } else {
                    dp[i][j] = false;
                }
            } else {
                if (dp[i + 1][j - 1] && str[i] === str[j]) {
                    dp[i][j] = true;
                    if (palstr === "" || palstr.length < j - i + 1) {
                        palstr = str.substring(i, j - i + 1);
                    }
                } else {
                    dp[i][j] = false;
                }
            }
        }
    }

    return palstr;
}

function LongestPallindromeUtil(str) {
    const len = str.length;
    const dp = Array.from({ length: len }, () => Array(len).fill(false));
    for (let g = 0; g < len; g++) {
        for (let i = 0, j = g; j < len; i++, j++) {
            if (g === 0) {
                dp[i][j] = true;
            } else if (g === 1) {
                if (str[i] === str[j]) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            } else {
                if (dp[i + 1][j - 1] && str[i] === str[j]) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = false;
                }
            }
        }
    }
    let max = "";

    for (let indx = 0; indx < len; indx++) {
        let currmax = "";
        for (let currIndx = 0; currIndx <= indx; currIndx++) {
            if (dp[currIndx][indx] && currmax.length < indx - currIndx + 1) {
                currmax = str.substring(currIndx, indx + 1);
            }
        }
        if (max.length < currmax.length) {
            max = currmax;
        }
    }
    return max;
}

const newstr = LongestPallindrome("babad");
const newstr2 = LongestPallindromeUtil("babad");
console.log(newstr2);
console.log(newstr);
