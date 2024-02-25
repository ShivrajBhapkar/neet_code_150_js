// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

function find_minimum(nums) {
    let start = 0;
    let end = nums.length - 1;
    let ans = Number.MAX_VALUE;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] >= nums[start]) {    // this mean left part of the array is sorted so the minimum value from left sorted array is start only so we compare that value to our current minimum value (ans) and discart left array
            ans = Math.min(ans, nums[start]);
            start = mid + 1;
        } else {
            ans = Math.min(ans, arr[mid]);
            end = mid - 1;
        }
    }
   
    return ans;
}
console.log(find_minimum([11, 13, 15, 17]));
console.log(find_minimum([3, 4, 5, 1, 2]));
console.log(find_minimum([4, 5, 6, 7, 0, 1, 2]));
