function MaximumSum(nums) {
    let length = nums.length;
    let maximum_sum = Number.MIN_VALUE;
    let current_sum = 0;
    for (let indx = 0; indx < length; indx++) {
        maximum_sum = Math.max(maximum_sum, current_sum);
        current_sum += nums[indx];
        if (current_sum < 0) {
            current_sum = 0;
        }
    }
maximum_sum = Math.max(maximum_sum, current_sum);
    return maximum_sum;
}
let nums = [5, 4, -1, 7, 8];
const result = MaximumSum(nums);
console.log(result);
