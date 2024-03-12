function FindNumberCombination(str) {
    if (str.length === 0) {
        return {};
    }
    const DP = [];
    const phone_map = [
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz",
    ];
    function FindNumberCombinationUtil(currstr, indx) {
        if (indx === str.length) {
            DP.push(currstr);
            return;
        }
        const letters = phone_map[str[indx] - "2"];
        for (const letter of letters) {
            FindNumberCombinationUtil(currstr + letter, indx + 1);
        }
    }

    FindNumberCombinationUtil("", 0);
    return DP;
}
const result = FindNumberCombination("23");
console.log(result);
