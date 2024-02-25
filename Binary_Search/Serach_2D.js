function isPresent(nums, target) {
    let rowstart = 0;
    let rowend = nums.length-1;
    let targetrow = -1;
    while (rowstart <= rowend) {
        let mid = Math.floor((rowstart + rowend) / 2);
        if (nums[mid][nums[0].length - 1] === target) {
            return true;
        } else if (nums[mid][nums.length - 1] < target) {
            rowstart = mid + 1;
        } else {
            targetrow = mid;
            rowend = mid - 1;
        }
    }
    if (targetrow === -1) {
        return false;
    } else {
            let start = 0;
            let end = nums[targetrow].length - 1;
            while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                if (nums[targetrow][mid] === target) {
                    return true;
                } else if (nums[targetrow][mid] >= target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
    return false;
}
const nums = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
];
const target = 3;
const is_possible = isPresent(nums, target);
console.log(is_possible);
