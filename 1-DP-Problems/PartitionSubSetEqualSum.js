function PartitionSubSet(nums) {
    const len = nums.length;
    let sum = 0;
    for (let indx = 0; indx < len; indx++) {
        sum += nums[indx];
    }
    if (sum % 2 !== 0) {
        return false;
    }
    let targetSum = Math.floor(sum / 2);
    const numRows = nums.length + 1; // Replace with the actual length of your 'nums' array
    const numCols = targetSum + 1; // Replace with the actual target sum

    // Initialize a 2D array with all elements set to false
    const dp = new Array(numRows)
        .fill(false)
        .map(() => new Array(numCols).fill(false));

    for (let i = 0; i < numRows; i++) {
        dp[i][0] = true;
    }
    for (let i = 1; i < numRows; i++) {
        for (let j = 1; j < numCols; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= nums[i - 1]) {
                if (dp[i - 1][j - nums[i - 1]]) {
                    dp[i][j] = dp[i - 1][j - nums[i - 1]];
                }
            }
        }
    }
    return dp[numRows - 1][numCols-1];
}

const result = PartitionSubSet([1, 2, 3, 5]);
console.log(result);
