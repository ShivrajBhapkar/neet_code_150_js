function FindLongestSubSequence(nums) {
    const len = nums.length;
    const DP = Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && 1 + DP[j] > DP[i]) {
                DP[i] = DP[j] + 1;
            }
        }
    }
    let max = Number.MIN_VALUE;
    for (let indx = 0; indx < len; indx++) {
        max = Math.max(max, DP[indx]);
    }
    return max;
}
const result = FindLongestSubSequence([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(result);
