function find_number(nums, target) {
    let indx = -1;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return indx;
}

const indx = find_number([-1, 0, 3, 5, 9, 12], 9);
console.log(indx);