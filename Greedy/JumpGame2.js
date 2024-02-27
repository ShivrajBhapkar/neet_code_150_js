function FindMinJump(nums) {
    let current_max = nums[0];
    let maxRange = nums[0];
    let indx = 1;
    let minJump = 1;
    while (indx < nums.length) {
        while (indx < nums.length && indx <= maxRange) {
            current_max = Math.max(current_max, indx + nums[indx]);
            indx++;
        }
        if (indx < nums.length) {
            minJump++;
            maxRange = current_max; // Corrected line
        }
    }
    return minJump;
}

const result = FindMinJump([2, 3, 1, 1, 4]);
console.log(result);
