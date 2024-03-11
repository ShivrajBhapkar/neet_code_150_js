function FindCombinations(nums, target) {
    const DP = [];
    function FindCombinationsUtil(indx, temp = [], currsum) {
        if (currsum === target && !isExist(temp)) {
            DP.push([...temp]);
            return;
        }
        for (let i = indx; i < nums.length; i++) {
            if (currsum + nums[i] <= target) {
                temp.push(nums[i]);
                FindCombinationsUtil(i + 1, temp, currsum + nums[i]);
                temp.pop();
            }
        }
    }
    function isExist(currarr) {
        const key = JSON.stringify(currarr);
        return DP.some((arr) => JSON.stringify(arr) === key);
    }
    FindCombinationsUtil(0, [], 0);
    return DP;
}
const result = FindCombinations([10, 1, 2, 7, 6, 1, 5], 8);
console.log(result);
