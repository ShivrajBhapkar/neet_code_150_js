// Medium

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

const nums = [-1, 0, 1, 2, -1, -4];
const result = Find_Three_Sum(nums);
console.log(result);

function Find_Three_Sum(nums) {
    if (nums.length < 3) {
        return [];
    }
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        FindTriplet(i, nums, result);
    }
    return result;
}

function FindTriplet(indx, nums, result) {
    let start = indx + 1;
    let end = nums.length - 1;
    while (start < end) {
        const sum = nums[indx] + nums[start] + nums[end];
        if (sum === 0) {
           const temp = [nums[indx], nums[start], nums[end]];
            result.push(temp);
            start++;
            end--;
            while (start < end && nums[start - 1] === nums[start]) {
                start++;
            }
            while (start<end && nums[end] == nums[end + 1]) {
                end--;
            }
        } else if (sum > 0) {
            end--;
        } else {
            start++;
        }
    }
  
}
