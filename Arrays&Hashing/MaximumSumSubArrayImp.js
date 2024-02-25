//  Maximum subarray
// Ninjas has been given an array. He wants to find a subarray such that the sum of all elements in the subarray is maximum.
// Subarray 'A' is greater than sub-array 'B' if sum(A) > sum(B). If two sub-array have the same maximum sum, then output the subarray that has a larger length.
// A subarray means a contiguous part of an array. For example, In 'arr' = [1, 2, 3, 4], [1, 2], [2, 3, 4] are the contiguous subarry but [1, 3, 4] is not a subarray.
function KadanceAlgo(nums) {
    let start = 0;
    let end = 0;
    let tempStart = 0;
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = nums[i];
            tempStart = i;
        } else {
            currentSum += nums[i];
        }
        if (
            currentSum > maxSum ||
            (currentSum === maxSum && i - tempStart > end - start)
        ) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }
    return nums.slice(start, end + 1);
}
console.log(KadanceAlgo([1, -2, 3, 4, -1, 2, 1, -5, 4]));
