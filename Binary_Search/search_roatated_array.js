function find_target(nums, target) {
    //    int a[] = {20 , 30 , 40 , 50 , 60 , 5 , 10};
    // target = 5;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target<=nums[end]  && nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

console.log(find_target([20, 30, 40, 50, 60, 5, 10], 40));
