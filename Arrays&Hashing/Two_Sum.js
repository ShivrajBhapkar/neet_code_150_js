function two_sum(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++){
        const remaining = target - nums[i];
        if (remaining in numIndices) {
            return [numIndices[remaining], i];
        }
        numIndices[nums[i]] = i;
    }
    return [];
}

const test1 = console.log(two_sum([0, -1, 2, -3, 1], -2));

