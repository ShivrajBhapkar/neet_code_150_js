function FindPermutations(nums) {
    const DP = [];
    function FindPermutationsUtil(indx, list = []) {
        if (indx === nums.length - 1) {
            list = [];
            for (let j = 0; j < nums.length; j++) {
                list.push(nums[j]);
            }
            DP.push(list);
            return;
        }
        for (let i = indx; i < nums.length; i++) {
            Swap(indx, i);
            FindPermutationsUtil(indx + 1, list);
            Swap(indx, i);
        }
    }
    function Swap(start, currIndx) {
        [nums[start], nums[currIndx]] = [nums[currIndx], nums[start]];
    }
    FindPermutationsUtil(0, []);
    return DP;
}
const result = FindPermutations([1, 2, 3]);
console.log(result);
