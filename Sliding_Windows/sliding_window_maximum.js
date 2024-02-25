// Hard

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length
function maximum_array(nums, k) {
    let result = [];
    let dque = [];
    for (let i = 0; i < k; i++) {
        while (dque.length != 0 && nums[i] > nums[dque[dque.length - 1]]) {
            dque.pop();
        }
        dque.push(i);
    }

    for (i = k; i < nums.length; i++) {
        result.push(nums[dque[0]]);

        while (dque.length != 0 && dque[0] <= i - k) {
            dque.shift();
        }
        while (dque.length != 0 && nums[i] > nums[dque[dque.length - 1]]) {
            dque.pop();
        }
        dque.push(i);
    }
    result.push(nums[dque[0]]);
    return result;
}
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
console.log(maximum_array(nums, k));
