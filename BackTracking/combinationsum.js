function FindCombinationSum(nums, target) {
    const DP = [];
    function FindCombinationSumUtil(indx, currSum, temp = []) {
        if (currSum === target) {
            DP.push([...temp]);
            return;
        }
        for (let i = indx; i < nums.length; i++) {
            if (currSum + nums[i] <= target) {
                temp.push(nums[i]);
                FindCombinationSumUtil(i, currSum + nums[i], temp);
                temp.pop();
            }
        }
    }
    FindCombinationSumUtil(0, 0, []);
    return DP;
}
const result = FindCombinationSum([2, 3, 6, 7], 7);
console.log(result);
