function FindWordInDict(str, dict) {
    let len = str.length;
    const DP = Array(len).fill(false);
    for (let indx = 0; indx < len; indx++) {
        for (let j = 0; j <= indx; j++) {
            let tempstr = str.substring(j, indx + 1);
            if (indx - j > 21) {
                break;
            }
            const foundElement = dict.find((element) => element === tempstr);
            if (foundElement !== undefined) {
                if (DP[j - 1] || j === 0) {
                    DP[indx] = true;
                    break;
                }
            }
        }
    }
    return DP[len - 1];
}
function FindWordInDictUtil(str, dict) {
    let len = str.length;
    const DP = Array(len).fill(false);
    for (let indx = 0; indx < len; indx++) {
        for (let j = indx; j >= 0; j--) {
            let tempstr = str.substring(j, indx + 1);
            if (DP[indx] || indx - j > 21) {
                break;
            }
            const foundElement = dict.find((element) => element === tempstr);
            if (foundElement !== undefined) {
                if (j === 0) {
                    DP[indx] = true;
                } else {
                    DP[indx] = DP[j - 1];
                }
            }
        }
    }
    return DP[len - 1];
}
const result = FindWordInDict("applepenapple", ["apple", "pen"]);
const result1 = FindWordInDictUtil("applepenapple", ["apple", "pen"]);
console.log(result);
console.log(result1);
