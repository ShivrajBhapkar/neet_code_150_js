// Recursive Soltion
function FindWays(nums, target) {
    function targetSum(nums, indx, currSum, target) {
        if (indx >= nums.length) {
            return currSum === target ? 1 : 0;
        }

        let byAdding = targetSum(nums, indx + 1, currSum + nums[indx], target);
        let bySubtracting = targetSum(
            nums,
            indx + 1,
            currSum - nums[indx],
            target
        );

        return byAdding + bySubtracting;
    }
    const result = targetSum(nums, 0, 0, target);
    console.log(result);
}
function FindWaysUtil(nums, target) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    const memo = Array.from({ length: nums.length }, () =>
        Array(2 * sum + 1).fill(Number.MIN_SAFE_INTEGER)
    );
    function targetSum(nums, indx, currSum, target, memo) {
        if (indx === nums.length) {
            return currSum === target ? 1 : 0;
        } else {
            if (memo[indx][sum + currSum] !== Number.MIN_SAFE_INTEGER) {
                return memo[indx][sum + currSum];
            }
            let byAdding = targetSum(
                nums,
                indx + 1,
                currSum + nums[indx],
                target,
                memo
            );
            let bySubtracting = targetSum(
                nums,
                indx + 1,
                currSum - nums[indx],
                target,
                memo
            );
            memo[indx][sum + currSum] = byAdding + bySubtracting;
            return memo[indx][sum + currSum];
        }
    }
    const result = targetSum(nums, 0, 0, target, memo);
    console.log(result);
}
FindWaysUtil([1, 1, 1, 1, 1], 3);
FindWays([1, 1, 1, 1, 1], 3);
