function FindPossibleToReachDestination(nums) {
    let destination = nums.length;
    let max_current_range = nums[0];
    let indx = 1;
    while (indx < nums.length) {
        max_current_range = Math.max(max_current_range, indx + nums[indx]);
        if (max_current_range >= destination) {
            return true;
        }
        if (max_current_range <= indx && nums[indx] === 0) {
            return false;
        }
        indx++;
    }
    return false;
}
const is_possible = FindPossibleToReachDestination([3,2,1,0, 4]);
console.log(is_possible);
